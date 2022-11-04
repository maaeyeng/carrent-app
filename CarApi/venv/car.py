from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return 'Index Page'

@app.route("/car")
def hellow():
    return "<p>Hello, CarApi</p>"