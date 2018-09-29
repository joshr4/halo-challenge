from server import app, db, routes_keys, routes_user
from flask import render_template

@app.route('/')
def index():
    return render_template("index.html")
