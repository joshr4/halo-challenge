from server import app, db
from flask import request, jsonify, json
from server.models import User
from flask_login import current_user, login_user, logout_user

@app.route('/login', methods=['POST'])
def login():
    incomingUser = request.get_json()
    user = User.query.filter_by(username=incomingUser['username']).first()
    if user is None or not user.check_password(incomingUser['password']):
        return json.dumps({'message': 'Wrong username and/or password'})
    login_user(user)
    jsonUser = {
        'id': user.id,
        'username': user.username,
    }
    return json.dumps({'user': jsonUser, 'messsage': 'Successfully logged in'})

@app.route('/signup', methods=['POST'])
def signup():
    newUser = request.get_json()
    user = User(username=newUser['username'])
    user.set_password(newUser['password'])
    try:
        db.session.add(user)
        db.session.commit()
        jsonUser = {
            'id': user.id,
            'username': user.username,
        }
    except:
        return json.dumps({'message': 'Signup Error, please try another username.'})
    return json.dumps({'user': jsonUser, 'messsage': 'Signup!'})

@app.route('/logout')
def logout():
    logout_user()
    return json.dumps({'message': 'User Successfully logged out'})
