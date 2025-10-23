from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.oute('/home')
def home():
    return 'Welcome to the Home page!'
if __name__ == '__main__':
    app.run(debug=True, port=8080)
    app.run(debug=True)
