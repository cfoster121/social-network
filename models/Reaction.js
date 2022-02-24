// Require schema and model from mongoose
const mongoose = require('mongoose');

// Construct a new instance of the schema class
const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: [true, 'Please enter a reaction'],
        minLength: 1,
        maxLength: 280
    },
    username: {
        type: String,
        required: [true, 'Please enter a username'],
    },
    createdAt: {
        type: Date,
        default: Date.now()  
    }
})

// Create Reaction model via reactionSchema
const Reaction = model('reaction', reactionSchema);

// Export
module.exports = Reaction;