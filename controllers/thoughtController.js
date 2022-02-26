const { createDecipheriv } = require('crypto');
const { Thought, User } = require('../models');

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    // Create new thought
    createThought(req, res) {
        Thought.create({
            thoughtText: req.body.thoughtText,
            username: req.body.username
        })
            .then((dbThoughtData) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: dbThoughtData._id } },
                    { new: true }
                );
            })
            .then(response => {
                if (!response) {
                    res.status(404).json({ message: 'Error' });
                    return;
                }
                res.json(response)
            })
            .catch(err => res.json(err));
    },

    //Get single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought found' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    //Update a thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body }
        )
            .then((thought) =>
                !course
                    ? res.status(404).json({ message: 'No thought found' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Delete a thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought found' })
                    : res.json({ message: 'Thought deleted!' }))
            .catch((err) => res.status(500).json(err));
    },

    // Add reaction to a thought
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { new: true },
        )
            .then((thought) =>
                !thought
                    ? res
                        .status(404)
                        .json({ message: 'No thought found' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Remove a reaction from a thought
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.body.reactionId } } },
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
