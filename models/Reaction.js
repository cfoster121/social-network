// Require schema and model from mongoose
const { Schema } = require('mongoose');

// Construct a new instance of the schema class
const reactionSchema = new Schema({
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


// Export
module.exports = reactionSchema;