# Halo Challenge

This is a simple web app that uses React on the frontend and a Python Flask server on the backend. Users can login, set key-value pairs, and then retrieve or delete key-value pairs from the backend.

## Setup

To use this application, please perform the following steps:

* First, clone the repo to your local machine
```
git clone https://github.com/joshr4/halo-challenge.git
cd halo-challenge
```

* Next, install the required project dependencies. Please ensure you already have the npm and pipenv package managers installed on your system.
```
npm install
pipenv install
```
* Please edit the `env` file in the root of the project folder so that the SQLALCHEMY_DATABASE_URI variable points to an empty table in your postgres server.

* Finally, start the flask server and then visit http://localhost:5000.
```
pipenv shell
flask run
```
