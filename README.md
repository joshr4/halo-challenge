# Halo Challenge

This is a simple web app that uses React on the frontend and a Python Flask server on the backend. Users can login, set key-value pairs, and then retrieve or delete key-value pairs from the backend.

## Setup

To use this application, please perform the following steps:

* First, clone the repo to your local machine
```
git clone https://github.com/joshr4/halo-challenge.git
cd halo-challenge
```

* Next, install the required project dependencies. Please ensure you already have the **npm** and **pipenv** package managers installed on your system. It also assumed that **python** is also already installed.
```
npm install
```
* Please edit the `env` file in the root of the project folder so that the SQLALCHEMY_DATABASE_URI variable points to an empty table in your postgres server.

* Next, initialize the backend server database tables.
```
npm run seed
```
* Finally, start the flask server and visit http://localhost:5000.
```
npm start
```

### Notes

This app uses a boilermaker project as a starting point. All new code for the front end is contained within the `/client/components` directory. The backend is completely new and contained within the `/server/` folder as well as the `pipfile`, `.env`, and `halo.py` files in the root directory. The package.json scripts have been edited to replace the boilermaker's node.js backend server commands with pipenv commands for the python flask server.

