var express = require('express');
var storesController = require('./controllers/storesController');

var app = express();

storesController(app);

app.listen(process.env.PORT || 8000);
console.log('You are listening to port 8000');
