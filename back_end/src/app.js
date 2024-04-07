const express = require('express');
const emailController = require('./controllers/email.controller');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//  Rota unica 

app.post('/email', emailController.insertNew);
app.get('/email', emailController.findAll);

module.exports = app;