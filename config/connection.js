const mongoose = require('mongoose');

//Set up Mongoose on MongoDB server - can replate '127.0.0.1' with 'localhost'
mongoose.connect('mongodb://127.0.0.1:27017/socialnetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
