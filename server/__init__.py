from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager

app = Flask(__name__, static_folder="../public", template_folder="../public")
app.config.from_object('server.config.Config')
db = SQLAlchemy(app)
migrate = Migrate(app, db)
login = LoginManager(app)

from server import routes, models
