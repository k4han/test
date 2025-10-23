from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/home')
def home():
    return 'Welcome to the Home page!'

if __name__ == '__main__':
    # For production, set debug=False and handle host/port via environment variables
    app.run(debug=True, port=8080)
