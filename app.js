const express = require('express');
const routes = require('./routes/index');
const path = require('path')
const app = express();

app.set('view engine', 'ejs');

app.use('/', routes);

app.use('*', function(req, res){
  res.send('Error 404: Not Found!');
});

module.exports = app;