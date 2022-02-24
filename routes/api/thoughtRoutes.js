const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought
    // updateThought,
    // deleteThought,
    // createReaction,
    // deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought);
// .post(updateThought).delete(deleteThought);

// // /api/thoughts/:thoughtId/reaction
// router.route('/thoughts/:thoughtId/reaction').post(createReaction).delete(deleteReaction);

module.exports = router;
