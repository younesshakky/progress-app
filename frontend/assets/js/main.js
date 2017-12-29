
function AjaxInterface (settings) {
  this.method;
  this.endPoint;
  this.xhr = new XMLHttpRequest();

  Object.assign(this, settings)
}

AjaxInterface.prototype = {
  // send request
  _send: function (data) {
    this.xhr.open(this.method, this.URL)
    this.xhr.send(data)
  },

  _json: function (res) {
    return JSON.parse(res);
  },

  // set single header
  _setHeader: function (key, value) {
    this.xhr.setRequestHeaders(key, value)
  },

  // recieves Object
  _appendHeaders: function (headers) {
    // this.headers = headers;
    for (header in headers) {
      this._setHeader(header, headers[header])
    }
  },

  _joinUrl: function (URI) {
    this.URL = this.endPoint + URI;
    return this.URL;
  },

  _handleRequset: function (callback) {
    this.xhr.onreadystatechange = () => {
      if (this.xhr.readyState === 4) {
        callback( this._json(this.xhr.response) )
      } 
    }
  },

  _handleError: function (callback) {
    this.xhr.onerror = () => {
      alert('something went seriously wrong')
      callback()
    }
  },

  // requset methods

  get: function (URI, callback) {
    this.method = 'get';


    
    this._joinUrl(URI);
    this._send();
    this._handleRequset(callback)
  },

  setXFormHeader: function () {
    this._setHeader('Content-Type', 'x-encoded-form');
  },

  post: function (URI, data, callback) {
    this.method = 'post';
    this._joinUrl(URI);
    this.
    this.send
  }



}

var proxy = new AjaxInterface();
