const express = require('express');
const router = express.Router();
const authRoute = require('./auth.route')
const userRoute = require('./user.route')

router.use('/auth', authRoute)
router.use('/user', userRoute)

router.get('/', function(req, res, next) {
  res.send('welcome from API')
})



module.exports = router;
