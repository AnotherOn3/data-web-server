var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to a database
mongoose.connect('mongodb://admin:admin@ds139187.mlab.com:39187/another-one', {
  useMongoClient: true,
});

// create a schema for our data
var productsSchema = new mongoose.Schema({
  id: Number,
  name: String,
  shopImage: String,
  image: String,
  quantity: Number,
  quantityType: String,
  price: Number,
});

//Body parser is only needed for the POST method
var Products = mongoose.model('Products', productsSchema);

var urlencodedParser = bodyParser.urlencoded({ extended: true });

module.exports = function(app) {
  app.get('/products', function(req, res) {
    //get data from mongoDB and pass it to the view
    Products.find({}, function(err, data) {
      if (err) throw err;
      res.json(data);
    });
  });
};
