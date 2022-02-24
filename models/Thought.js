// Require schema and model from mongoose
const mongoose = require('mongoose');

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

//Export
module.exports = Thought;