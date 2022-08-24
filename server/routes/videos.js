const express = require('express');
const videoCtrl = require('../controllers/video');
const { verifyToken } = require('../verifyToken');

const router = express.Router();

//create a video
router.post('/', verifyToken, videoCtrl.addVideo);

router.put('/:id', verifyToken, videoCtrl.updateVideo);

router.delete('/:id', verifyToken, videoCtrl.deleteVideo);

router.get('/find/:id', videoCtrl.getVideo);

router.put('/view/:id', videoCtrl.addView);

router.get('/trend', videoCtrl.trend);

router.get('/random', videoCtrl.random);

router.get('/sub', verifyToken, videoCtrl.sub);

router.get('/tags', videoCtrl.getByTag);

router.get('/search', videoCtrl.search);

module.exports = router;
