from server import app, db
from flask import request, jsonify, json
from server.models import User, Key
from flask_login import current_user

@app.route('/api/keys', methods=['GET', 'POST'])
def key():
    if request.method == 'GET': # get all keys authored by the current_user
        if current_user.is_authenticated:
            allKeys = Key.query.filter_by(user_id = current_user.id)
            jsonKeys = []
            if allKeys:
                for key in allKeys:
                    jsonKeys.append(
                        {
                            'id': key.id,
                            'key': key.key,
                        }
                    )
            return json.dumps(jsonKeys)
        return json.dumps({'message': 'Must be logged in to get your key-value pairs'})
    elif request.method == 'POST': # add a new key-value entry
        if current_user.is_authenticated:
            jsonData = request.get_json()
            newKey = Key(key=jsonData['key'], value=jsonData['value'], author=current_user)
            db.session.add(newKey)
            db.session.commit()
            return json.dumps({'id': newKey.id,'key': newKey.key})
        return json.dumps({'message': 'Must be logged in to create a new key-value pair'})

@app.route('/api/keys/<key>', methods=['DELETE', 'GET'])
def resource(key):
     if request.method == 'GET': # get one key-value entry by id
        if current_user.is_authenticated:
            getKey = Key.query.filter_by(id=key, author=current_user).first()
            if getKey:
                jsonKey = {
                    'id': getKey.id,
                    'key': getKey.key,
                    'value': getKey.value,
                    'user_id' : getKey.user_id
                }
                return jsonify(jsonKey)
            return json.dumps({'message': 'Invalid key id, or you are not logged in as the correct user'})
     elif request.method == 'DELETE': # delete a key-value entry by id
        delKey = Key.query.filter_by(id=key).first()
        db.session.delete(delKey)
        db.session.commit()
        return json.dumps({'message': 'Key successfully deleted'})
