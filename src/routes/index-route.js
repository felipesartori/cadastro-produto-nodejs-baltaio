'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

router.get('/status', (req, res, next) => {
    res.status(200).send({
        result: "API está rodando.."
    });
});

module.exports = router;