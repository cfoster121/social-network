// Require schema and model from mongoose
const { Schema, model } = require('mongoose');
// Require thoughtSchema for 'thoughts' key
const thoughtSchema = require('./Thought');

// Construct a new instance of the schema class
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Please enter a username'],
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please enter an email'],
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    // thoughts: [thoughtSchema],
    friends: [this]
},
);

// Create User model via userSchema
const User = model('user', userSchema);



// Export
module.exports = User;
