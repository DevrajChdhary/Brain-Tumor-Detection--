from flask import Flask, render_template, request, jsonify
from werkzeug.utils import secure_filename
import os
import numpy as np
import cv2
from tensorflow.keras.models import load_model
import logging

# Disable GPU usage for TensorFlow
os.environ["CUDA_VISIBLE_DEVICES"] = "-1"

# Initialize the Flask application
app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec/'

# Define the folder for storing uploaded images
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Allowed file extensions for image uploads
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

# Set up logging to track application events
logging.basicConfig(level=logging.INFO)

def allowed_file(filename):
    """Check if the uploaded file has an allowed extension."""
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Load the pre-trained deep learning model for tumor classification
logging.info("Loading the trained model...")
Model = load_model('Model.h5', compile=False)
logging.info("Model loaded successfully.")

# Define tumor classes and their corresponding labels
tumor_class = {
    0: 'glioma',
    1: 'meningioma',
    2: 'notumor',
    3: 'pituitary'
}

def model_predict(img_path, Model):
    """Preprocess image and predict tumor type."""
    logging.info(f"Processing image: {img_path}")
    
    # Read the uploaded image using OpenCV
    img = cv2.imread(img_path)
    
    # Resize the image to the input size required by the model
    img = cv2.resize(img, (224, 224))
    
    # Convert the image into a NumPy array and reshape it to match the input format of the model
    img_array = np.array(img).reshape(1, 224, 224, 3)
    
    logging.info("Generating predictions using the model...")
    # Predict probabilities for each tumor class
    predictions = Model.predict(img_array)
    
    # Identify the class with the highest probability
    predicted_class_index = np.argmax(predictions)
    
    # Calculate the confidence level (percentage) of the prediction
    confidence_percentage = np.max(predictions) * 100
    
    logging.info(f"Prediction complete: {tumor_class[predicted_class_index]} ({confidence_percentage:.2f}%)")
    
    # Return predicted class index, confidence percentage, and raw prediction probabilities
    return predicted_class_index, confidence_percentage, predictions[0]

@app.route('/')
def index():
    """Render the homepage where users can upload images."""
    return render_template('APP.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    """Handle image file upload and initiate tumor prediction."""
    
    # Check if a file is present in the request
    if 'file' not in request.files:
        logging.warning("No file found in the request.")
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    
    # Check if a valid file has been selected
    if file.filename == '' or not allowed_file(file.filename):
        logging.warning("Invalid or empty file uploaded.")
        return jsonify({'error': 'Invalid file type'}), 400
    
    # Secure the file name to prevent malicious uploads
    filename = secure_filename(file.filename)
    
    # Define the file path where the image will be saved
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    
    # Save the uploaded image to the server
    file.save(file_path)
    logging.info(f"File successfully saved: {file_path}")
    
    # Process the uploaded image and predict tumor type
    predicted_class_index, confidence_percentage, probabilities = model_predict(file_path, Model)
    
    # Retrieve the predicted tumor class label
    predicted_class = tumor_class[predicted_class_index]
    
    # Construct response data containing classification results and probabilities
    response = {
        'message': f"Analysis complete. {predicted_class} detected with {confidence_percentage:.2f}% confidence",
        'probabilities': {
            'glioma': probabilities[0] * 100,
            'meningioma': probabilities[1] * 100,
            'notumor': probabilities[2] * 100,
            'pituitary': probabilities[3] * 100
        }
    }
    
    logging.info("Prediction results successfully generated.")
    
    # Return the response as a JSON object
    return jsonify(response)

if __name__ == '__main__':
    logging.info("Starting Flask application server...")
    app.run(debug=True)
