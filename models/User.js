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
        // validate: {
        //     validator: function (v) {
        //         return /[a-zA-Z0-9]{1,}+@+[a-zA-Z]{1,}+\.+[a-zA-Z]{2,}/.test(v)
        //     },
        //     message: props => `${props.value} is not a valid email address, please enter a valid email address.`
        // }
    },
    // thoughts: [thoughtSchema],
    friends: [this]
}
);

// Create User model via userSchema
const User = model('user', userSchema);



// Export
module.exports = User;
