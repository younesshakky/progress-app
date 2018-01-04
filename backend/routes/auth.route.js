const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller')
const auth = require('../controllers/auth.controller')

router.post('/login', auth.login)

module.exports = router;