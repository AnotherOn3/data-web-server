var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to a database
mongoose.connect('mongodb://admin:admin@ds139187.mlab.com:39187/another-one', {
  useMongoClient: true,
});

// create a schema for our data
var storesSchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: String,
  discountNumber: Number,
});

var Stores = mongoose.model('Stores', storesSchema);

//Body parser is only needed for the POST method
var urlencodedParser = bodyParser.urlencoded({ extended: true });

module.exports = function(app) {
  app.get('/stores', function(req, res) {
    //get data from mongoDB and pass it to the view
    Stores.find({}, function(err, data) {
      if (err) throw err;
      res.json(data);
    });
  });
  app.get('/stores/:id', function(req, res) {
    //get data from mongoDB and pass it to the view
    Stores.find({ id: req.params.id }, function(err, data) {
      if (err) throw err;
      res.json(data);
    });
  });
};
