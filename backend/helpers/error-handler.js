const APIError = require('./APIError');

module.exports = {
  
  notFound: function () {
    return new APIError('not found', 404)
  },
  badCreds: function () {
    return new APIError('bad credentials', 401)    
  },
  validationErr: function () {
    return new APIError('silly data!', 400)    
  },
  noUser: function () {
    return new APIError('no such user', 404)
  }


}