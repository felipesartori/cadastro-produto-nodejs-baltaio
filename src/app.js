'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connecta no BD
mongoose.connect(
    "mongodb://localhost:27017/node_str", 
    { useNewUrlParser: true}
);

// Carrega os Models
const Product = require('./models/product');

// Carregando rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute); //Informações
app.use('/status', indexRoute); //Status da API
app.use('/products', productRoute);

module.exports = app;

// Status:
// 200 - ok
// 201 - created
// 400 - bad request
// 401 - não autenticado
// 403 - acesso negado
// 500 - erro geral
