const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const _ = require('lodash')
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

exports.loadUserInfo = function (req, res, next) {
  User.findById(req.userId, User.defaultInfo)
  .then(user => res.send(user))
}

exports.updateUserInfo = function (req, res, next) {
  let infoToFetch = _.pull(User.defaultInfo, 'goals');

  User.findById(req.userId, infoToFetch)
  .then(user => {

    for (let prop in req.body) {
      infoToFetch.forEach(item => {
        if (prop == item) {
          user[prop] = req.body[prop]
        }
      })
    }
    
    user.save().then(() => res.send(user))
  })
}


// exports.loadUserGoals = function (req, res, next) {}

