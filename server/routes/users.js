const express = require('express');
const userCtrl = require('../controllers/user');
const { verifyToken } = require('../verifyToken');

const router = express.Router();

//update user
router.put('/:id', verifyToken, userCtrl.update);

//delete user
router.delete('/:id', verifyToken, userCtrl.deleteUser);

//get a user
router.get('/find/:id', userCtrl.getUser);

//subscribe a user
router.put('/sub/:id', verifyToken, userCtrl.subscribe);

//unsubscribe a user
router.put('/unsub/:id', verifyToken, userCtrl.unsubscribe);

//like a video
router.put('/like/:videoId', verifyToken, userCtrl.like);

//dislike a video
router.put('/dislike/:videoId', verifyToken, userCtrl.dislike);

module.exports = router;
