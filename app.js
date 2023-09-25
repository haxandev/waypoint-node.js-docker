const express = require('express');
const router = require('./src/routes/index');
const errorHandler = require('./src/utils/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(router);

app.use(errorHandler)

module.exports = app;