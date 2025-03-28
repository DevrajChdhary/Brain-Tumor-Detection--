<h2>Overview</h2>
<p>This project aims to develop a deep learning-based model to detect brain tumors from MRI images. The model utilizes Artificial Neural Networks (ANN) to classify MRI scans into tumor and non-tumor categories. By leveraging medical imaging and AI, the project provides an efficient and accurate method for early diagnosis.</p>

<h2>Features</h2>
<ul>
    <li><strong>Deep Learning Model:</strong> Uses Artificial Neural Networks (ANN) for classification.</li>
    <li><strong>MRI Image Processing:</strong> Preprocessing techniques applied for enhanced accuracy.</li>
    <li><strong>Dataset:</strong> Publicly available MRI datasets used for training and validation.</li>
    <li><strong>User Interface:</strong> A Streamlit-based web application for easy model interaction.</li>
    <li><strong>Evaluation Metrics:</strong> Accuracy, precision, recall, and F1-score used to measure performance.</li>
</ul>

<h2>Dataset</h2>
<p>The dataset comprises labeled MRI scans of patients with and without brain tumors. Preprocessing techniques such as image normalization and augmentation have been applied to improve the model’s performance.</p>

<h2>Model Architecture</h2>
<ul>
    <li><strong>Input Layer:</strong> Accepts MRI scan images.</li>
    <li><strong>Hidden Layers:</strong> Multiple layers with activation functions to extract features.</li>
    <li><strong>Output Layer:</strong> Binary classification (Tumor / No Tumor).</li>
    <li><strong>Activation Function:</strong> ReLU for hidden layers and Sigmoid for output layer.</li>
    <li><strong>Loss Function:</strong> Binary Cross-Entropy.</li>
    <li><strong>Optimizer:</strong> Adam optimizer for efficient learning.</li>
</ul>

<h2>Installation</h2>
<h3>Prerequisites</h3>
<p>Ensure you have Python installed along with the following dependencies:</p>
<code>pip install tensorflow numpy pandas matplotlib opencv-python streamlit</code>

<h3>Clone the Repository</h3>
<code>git clone https://github.com/DevrajChdhary/brain-tumor-detection.git<br>cd brain-tumor-detection</code>

<h2>Usage</h2>
<h3>Running the Model</h3>
<ol>
    <li><strong>Preprocess the Data:</strong> Ensure MRI images are stored in the correct directory structure.</li>
    <li><strong>Train the Model:</strong> Execute the following script to train the ANN model:<br>
        <code>python train.py</code>
    </li>
    <li><strong>Run the Web Application:</strong><br>
        <code>streamlit run app.py</code>
    </li>
</ol>

<h2>Deployment on Cloud</h2>
<ul>
    <li><strong>Google Cloud Platform (GCP):</strong> Deploy using Cloud Run or App Engine.</li>
    <li><strong>AWS:</strong> Use EC2, Lambda, or SageMaker for model hosting.</li>
    <li><strong>Microsoft Azure:</strong> Deploy via Azure Web Apps or Azure Functions.</li>
    <li><strong>Render / Railway / Heroku:</strong> Simple and free-tier options for hosting the Streamlit app.</li>
    <li><strong>Hugging Face Spaces:</strong> Deploy the app for free with Streamlit.</li>
</ul>

<h2>Performance Metrics</h2>
<ul>
    <li><strong>Accuracy:</strong> Measures overall correct predictions.</li>
    <li><strong>Precision & Recall:</strong> Important for assessing false positives and false negatives.</li>
    <li><strong>F1-Score:</strong> Balances precision and recall.</li>
</ul>

<h2>Results</h2>
<p>The model achieves high accuracy in detecting brain tumors and demonstrates robust generalization on unseen MRI images.</p>

<h2>Future Enhancements</h2>
<ul>
    <li>Improve model accuracy using CNN-based architectures.</li>
    <li>Enhance dataset diversity for better generalization.</li>
    <li>Deploy the application as a cloud-based service for wider accessibility.</li>
</ul>

<h2>Contributors</h2>
<p><strong>Devraj Choudhary</strong> (<a href="https://github.com/DevrajChdhary">GitHub</a>)</p>

<h2>License</h2>
<p>This project is open-source and available under the MIT License.</p>
