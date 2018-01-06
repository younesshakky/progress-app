const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller')
const auth = require('../controllers/auth.controller')

router.use(auth.requestedUser)

// user info
router.get('/profile', userCtrl.loadUserInfo)
router.post('/profile', userCtrl.updateUserInfo)

// user goals
router.get('/goals', userCtrl.loadUserGoals)
router.post('/goals/new', userCtrl.addGoal)
router.post('/goals/:id', userCtrl.updateUserGoal)

module.exports = router;