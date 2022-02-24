const { User } = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    //Create new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    //Get single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    //Update a user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body }
        )
            .then((user) =>
                !course
                    ? res.status(404).json({ message: 'No user found' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Delete a user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found' })
                    : res.json({ message: 'User deleted!' }))
            .catch((err) => res.status(500).json(err));
    },

    // Add an friend to a user
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            {new:true},
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No user found' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

}
