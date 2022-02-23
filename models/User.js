// Require schema and model from mongoose
const mongoose = require('mongoose');

//USER//
// Construct a new instance of the schema class
const userSchema = new mongoose.Schema({
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
        validate: {
            validator: function (v) {
                return /[a-zA-Z0-9]{1,}+@+[a-zA-Z]{1,}+\.+[a-zA-Z]{2,}/.test(v)
            },
            message: props => `${props.value} is not a valid email address, please enter a valid email address.`
        }
    },
    thoughts: [thoughtSchema],
    friends: [userSchema]
});

//Create User model via userSchema
const User = model('user', userSchema);

//THOUGHT//
// Construct a new instance of the schema class
const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: [true, 'Please enter a thought'],
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        date: Date
    },
    username: {
        type: String,
        unique: true,
        required: [true, 'Please enter a username'],
    },
    reactions: [reactionSchema]
})

//Create Thought model via userSchema
const Thought = model('thought', thoughtSchema);


module.exports = { User, Thought, Reaction }
