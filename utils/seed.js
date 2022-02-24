const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userSeeds } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    const users = [];

    users.push({
            userSeeds
        });

    await User.collection.insertMany(users);
    console.log(users);
    process.exit(0);
});
