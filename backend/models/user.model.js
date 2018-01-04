const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstname : String,
  lastname  : String,
  username  : { type: String, required: true },
  email     : { type: String, required: true },
  password  : { type: String, required: true },
  isAdmin   : { type: Boolean, default: false },
  goals     : Array // just for now
})


module.exports = mongoose.model('users', userSchema)