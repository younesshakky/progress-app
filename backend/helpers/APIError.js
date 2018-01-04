const httpStatus = require('http-status');

class APIError  {
  constructor(message, status) {
    this.message = message;
    this.status = status || 500;
    this.code = httpStatus[status].split(' ').join('_');
  }
}

module.exports = APIError;
