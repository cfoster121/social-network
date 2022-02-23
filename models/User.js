// Require schema and model from mongoose
const mongoose = require('mongoose');

// Construct a new instance of the schema class
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: false },
  thoughts: {},
  friends: {}
});

module.exports = User;
