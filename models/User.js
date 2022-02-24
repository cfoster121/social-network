// Require schema and model from mongoose
const mongoose = require('mongoose');
// Require thoughtSchema for 'thoughts' key
const thoughtSchema = require('./Thought');

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

// Create User model via userSchema
const User = model('user', userSchema);

run()
async function run(){
    const user = await User.create({ username: 'testtest', email: 'text@aol.com'})
    console.log(user)
}



// Export
module.exports = User;
