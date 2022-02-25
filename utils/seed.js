const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userSeeds, thoughtSeeds } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    const users = userSeeds;
    const thoughts = thoughtSeeds;

    // users.push({
    //         userSeeds
    //     });

    //     thoughts.push ({
    //         thoughtSeeds
    //     });

    await User.collection.insertMany(users);    

    await Thought.collection.insertMany(thoughts);

    console.log(users);
    process.exit(0);
});
