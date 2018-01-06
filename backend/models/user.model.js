const mongoose = require('mongoose')
const Goal = require('../models/goal.model')

const userSchema = new mongoose.Schema({
  firstname : String,
  lastname  : String,
  username  : { type: String, required: true },
  email     : { type: String, required: true },
  password  : { type: String, required: true },
  isAdmin   : { type: Boolean, default: false },
  goals     : Array, // just for now
  created   : {type: Date, default: Date.now()}
})

userSchema.statics = {
  defaultInfo: [
    'username',
    'email',
    'goals',
    'firstname',
    'lastname'
  ]
}


module.exports = mongoose.model('users', userSchema)