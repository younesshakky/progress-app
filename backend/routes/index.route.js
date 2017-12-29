const express = require('express');
const router = express.Router();
const test = require('./test.route');

router.use('/test', test)

router.get('/', function(req, res, next) {
  res.send('welcome from API')
})



module.exports = router;
