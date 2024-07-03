import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = r'C:\Users\archa\OneDrive\Desktop'  # Adjust this path to your desired upload directory
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/upload', methods=['POST'])
def upload_file():
    uploaded_file = request.files['healthDocument']
    if uploaded_file.filename != '':
        # Save the uploaded file to the specified folder
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], uploaded_file.filename)
        uploaded_file.save(file_path)
        
        # Optionally, process the uploaded file further
        files = {'file': (uploaded_file.filename, uploaded_file.stream, uploaded_file.content_type)}
        payload = {
            'apikey': 'K84554588288957',
            'language': 'eng',
        }
        response = requests.post('https://api.ocr.space/parse/image', files=files, data=payload)
        result = response.json()
        
        # Return the OCR result or any other processing result
        return jsonify(result)

    return 'No file uploaded', 400

if __name__ == '__main__':
    app.run(debug=True)
