const { User } = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
            .then(async (user) => {
                const userObj = {
                    username,
                    email
                    // thoughts,
                    // friends
                };
                return res.json(studentObj);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    }}
