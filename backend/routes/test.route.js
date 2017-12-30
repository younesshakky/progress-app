const express = require('express')
const router = express.Router();

router.get('/load', function (req, res, next) {
  console.log(req.get('Content-Type'))
  res.send({ success: true })
})


router.post('/load', function (req, res, next) {
  console.log(req.get('Content-Type'))  
  res.send({ success: true })
})


module.exports = router;