const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const isEmpty = require('../helpers/validation').isEmpty
const errHandler = require('../helpers/error-handler')


exports.createNewUser = function (req, res, next) {
  const { username, email, password } = req.body

  if (isEmpty(username) || isEmpty(email) || isEmpty(password)) {
    return next(errHandler.validationErr())
  }

  bcrypt.hash(password, 10).then(hash => {
    var newUser = new User({
      password: hash,
      username,
      email,
    })

    newUser.save().then(() => {
      res.send({ message: 'new user created' })
    }).catch(err => { throw err })

  }).catch(err => { throw err })

}

