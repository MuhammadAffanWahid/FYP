from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Car Color Detection API!"

@app.route('/predict', methods=['POST'])
def predict():
    # This route will handle the image prediction logic
    return jsonify({'message': 'Prediction endpoint'})

if __name__ == '__main__':
    app.run(debug=True)
