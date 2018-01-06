const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const APIError = require('./helpers/APIError')
const index = require('./routes/index.route');

const app = express();

mongoose.connect('mongodb://localhost:27017/progress')
.then(() => {
  console.log('##### connected to database #####')
})

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('Access-Control-Allow-Origin', '*')

app.use(function (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*')
  next()
})

app.use('/api', index);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new APIError('Not Found', 404);
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log(err.message)
  
  res.status(err.status || 500);
  res.send(err)
});

module.exports = app;
