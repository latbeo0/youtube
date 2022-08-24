const express = require('express');
const commentCtrl = require('../controllers/comment');
const { verifyToken } = require('../verifyToken');

const router = express.Router();

router.post('/', verifyToken, commentCtrl.addComment);
router.delete('/:id', verifyToken, commentCtrl.deleteComment);
router.get('/:videoId', commentCtrl.getComments);

module.exports = router;
