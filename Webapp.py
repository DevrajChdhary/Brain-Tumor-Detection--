from flask import Flask, render_template, request, jsonify
from werkzeug.utils import secure_filename
import os
import numpy as np
import cv2
from keras.models import load_model
import tensorflow as tf
from keras.utils import img_to_array
from flask import send_from_directory


# Disable GPU usage
os.environ["CUDA_VISIBLE_DEVICES"] = "-1"

# Initialize Flask app
app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec/'

# Define the upload and processed folders
UPLOAD_FOLDER = 'uploads'
PROCESSED_FOLDER = 'processed'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['PROCESSED_FOLDER'] = PROCESSED_FOLDER

# Allowed file extensions
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

# Check if file is allowed
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Load trained model
Model = load_model('Model.h5', compile=False)

# Class labels
tumor_class = {
    0: 'glioma',
    1: 'meningioma',
    2: 'notumor',
    3: 'pituitary'
}

# Function to generate Grad-CAM heatmap
def get_gradcam_heatmap(model, img_array, last_conv_layer_name, pred_index=None):
    grad_model = tf.keras.models.Model(
        [model.inputs],
        [model.get_layer("efficientnetb3").get_layer(last_conv_layer_name).output, model.output],
    )

    with tf.GradientTape() as tape:
        conv_outputs, predictions = grad_model(img_array)
        if pred_index is None:
            pred_index = tf.argmax(predictions[0])
        class_channel = predictions[:, pred_index]

    # Gradients of the predicted class with respect to the last conv layer output
    grads = tape.gradient(class_channel, conv_outputs)

    # Mean intensity of gradients per channel
    pooled_grads = tf.reduce_mean(grads, axis=(0, 1, 2))

    # Multiply each channel by "how important it is"
    conv_outputs = conv_outputs[0]
    heatmap = conv_outputs @ pooled_grads[..., tf.newaxis]
    heatmap = tf.squeeze(heatmap)

    # Normalize heatmap between 0 and 1
    heatmap = tf.maximum(heatmap, 0) / tf.math.reduce_max(heatmap)
    return heatmap.numpy()

# Function to preprocess image and make predictions
def model_predict(img_path, model):
    img = cv2.imread(img_path)
    img = cv2.resize(img, (224, 224))
    img_array = np.array(img).astype('float32') / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    predictions = model.predict(img_array)
    pred_class = np.argmax(predictions[0])
    confidence = np.max(predictions[0]) * 100

    # Generate Grad-CAM
    heatmap = get_gradcam_heatmap(model, img_array, last_conv_layer_name='block7b_dwconv')

    # Apply heatmap
    heatmap = cv2.resize(heatmap, (224, 224))
    heatmap = np.uint8(255 * heatmap)
    heatmap = cv2.applyColorMap(heatmap, cv2.COLORMAP_JET)
    superimposed_img = heatmap * 0.4 + img

    gradcam_path = os.path.join(app.config['PROCESSED_FOLDER'], 'gradcam_' + os.path.basename(img_path))
    cv2.imwrite(gradcam_path, superimposed_img)

    return pred_class, confidence, predictions[0], gradcam_path

def save_and_overlay_heatmap(img_path, heatmap, output_path='static/gradcam.jpg', alpha=0.4):
    img = cv2.imread(img_path)
    img = cv2.resize(img, (224, 224))

    heatmap = cv2.resize(heatmap, (img.shape[1], img.shape[0]))
    heatmap = np.uint8(255 * heatmap)

    heatmap_color = cv2.applyColorMap(heatmap, cv2.COLORMAP_JET)
    superimposed_img = cv2.addWeighted(img, 1 - alpha, heatmap_color, alpha, 0)

    cv2.imwrite(output_path, superimposed_img)
    return output_path

# Ensure upload and processed folders exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(PROCESSED_FOLDER, exist_ok=True)

# Route for the home page
@app.route('/')
def index():
    return render_template('APP.html')

@app.route('/processed/<filename>')
def processed_file(filename):
    return send_from_directory(app.config['PROCESSED_FOLDER'], filename)

# Route to handle file uploads
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        # Make prediction
        predicted_class_index, confidence_percentage, probabilities, gradcam_path = model_predict(file_path, Model)
        predicted_class = tumor_class[predicted_class_index]

        # Return response
        return jsonify({
            'message': f"Analysis complete. {predicted_class} with {confidence_percentage:.2f}% confidence",
            'probabilities': {
                'glioma': float(probabilities[0] * 100),
                'meningioma': float(probabilities[1] * 100),
                'notumor': float(probabilities[2] * 100),
                'pituitary': float(probabilities[3] * 100)
            },
            'gradcam_image': f"/processed/{os.path.basename(gradcam_path)}"
        })
    else:
        return jsonify({'error': 'Allowed file types are png, jpg, jpeg, gif'}), 400

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
