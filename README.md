# Anyapost

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Members (Section 2)
6388030 Kulawut Makkamoltham
6388040 Ariya Phengphon
6388184 Patiphan Chan

## Install node_modules
Run `npm install` in both react folder and anya-post-server.

## Connecting NodeJS with Elasticsearch
- Put the password for elastic user in ```ELASTIC_PASSWORD = "changeme"``` into .env file
- put ```http_ca.crt``` file into the anya-post-server directory
    - For Docker, run ```docker cp es01:/usr/share/elasticsearch/config/certs/http_ca.crt .``` to get the CA certificate.
    - For nomral installation, see https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/client-connecting.html 

## Running Anya Post (```npm start```)
Start the backend server in the anya-post-server. Then start the react application.
