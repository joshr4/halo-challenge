import os

class Config(object):
	DEBUG = True
	SQLALCHEMY_DATABASE_URI = os.environ['SQLALCHEMY_DATABASE_URI']
	SQLALCHEMY_TRACK_MODIFICATIONS = False
	SECRET_KEY = "HALOinvestingIStheBEST"
