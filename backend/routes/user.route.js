const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller')
const auth = require('../controllers/auth.controller')

router.use(auth.requestedUser)

router.get('/profile', userCtrl.loadUserInfo)
router.post('/profile', userCtrl.updateUserInfo)

module.exports = router;