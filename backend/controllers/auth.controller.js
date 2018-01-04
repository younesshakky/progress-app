const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user.model')
const errHandler = require('../helpers/error-handler');
const isEmpty = require('../helpers/validation').isEmpty

exports.login = function (req, res, next) {
  if (
    isEmpty(req.body.username) ||
    isEmpty(req.body.password)
  ) {
    return next(errHandler.validationErr())
  }

  User.findOne({ username: req.body.username })
  .then(user => {
    if (!user) {
      return next(errHandler.noUser())
    }

    // verify password
    bcrypt.compare(req.body.password, user.password)
    .then(isAllowed => {
      if (!isAllowed) {
        return next(errHandler.badCreds())
      }

      res.send({
        token: jwt.sign({id: user._id}, 'verySecret'),
        message: 'you\'re in'
      })
    })
  })
}



exports.verifyToken = function (req, res, next) {
  const token = req.get('authorization')
  jwt.verify(token, function (isToken) {
    console.log(isToken)
  })

}
