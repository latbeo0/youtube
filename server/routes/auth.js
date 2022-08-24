const express = require('express');
const authCtrl = require('../controllers/auth');

const router = express.Router();

//CREATE A USER
router.post('/signup', authCtrl.signup);

//SIGN IN
router.post('/signin', authCtrl.signin);

//GOOGLE AUTH
router.post('/google', authCtrl.googleAuth);

module.exports = router;
