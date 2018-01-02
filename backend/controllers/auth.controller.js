const jwt = require('jsonwebtoken')
const errHandler = require('../helpers/error-handler');

function verifyToken (req, res, next) {
  const token = req.get('authorization')
  jwt.verify(token, function (isToken) {
    console.log(isToken)
  })

}
