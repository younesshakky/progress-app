const mongoose = require('mongoose')
const Schema = mongoose.Schema

const goalSchema = new Schema({

  title: { type: String, required: true },
  days: { type: Number, required: true },
  author: { type: String, required: true }, // user id
  acomplishedDays: { type: Number, default: 0 },
  isDone: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() }
})


module.exports = mongoose.model('goals', goalSchema)