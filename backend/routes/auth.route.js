const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller')
const auth = require('../controllers/auth.controller')

router.post('/register', userCtrl.createNewUser)
router.post('/login', auth.login)

module.exports = router;