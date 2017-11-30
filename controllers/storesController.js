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

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
  app.get('/stores', function(req, res) {
    //get data from mongoDB and pass it to the view
    Stores.find({}, function(err, data) {
      if (err) throw err;
      res.json(data);
    });
  });
};
