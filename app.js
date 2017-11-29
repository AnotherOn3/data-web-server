var express = require('express');
var storesController = require('./controllers/storesController');
var productController = require('./controllers/productsController');

var app = express();

storesController(app);
productController(app);

app.listen(process.env.PORT || 8000);
console.log('You are listening to port 8000');
