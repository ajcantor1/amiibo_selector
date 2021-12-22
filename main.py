from flask import Flask, current_app, render_template, send_file, send_from_directory, Response, jsonify
from flask_cors import CORS, cross_origin
import mimetypes
import os


app = Flask(__name__, template_folder='template', static_folder='static')
CORS(app, resources={r"/static/*": {"origins": "*"}})

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/characters', methods = ['GET'])
def getCharacters():
    images_files = os.listdir("./static/images/characters")
    return jsonify(results = images_files)

@app.route('/images/<path:pngFile>')
@cross_origin()
def serve_content(pngFile):
    return send_file(f'/static/images/{pngFile}')

@app.route('/images/characters/<path:pngFile>')
@cross_origin()
def serve_characters(pngFile):
    return send_file(f'/static/images/characters/{pngFile}')
  
