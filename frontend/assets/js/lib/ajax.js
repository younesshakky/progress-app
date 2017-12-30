(function (window) {

  function AjaxInterface(settings) {
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
      return this;
    },

    _json: function (res) {
      try {
        return JSON.parse(res)
      } 
      catch (err) {
        return res;
      }
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
      return this
    },

    _handleRequset: function (callback) {
      this.xhr.onreadystatechange = () => {
        if (this.xhr.readyState === 4) {
          callback(this._json(this.xhr.response))
        }
      }

      return this;
    },

    _handleError: function (callback) {
      this.xhr.onerror = () => {
        alert('something went seriously wrong')
        callback()
      }

      return this;
    },

    _setXFormHeader: function () {
      this._setHeader('Content-Type', 'application/x-www-form-urlencoded');
      return this;
    },

    
    // requset methods

    get: function (URI, callback) {
      this.method = 'get';


      this._joinUrl(URI)._send()._handleRequset(callback)
    },

    post: function (URI, data, callback) {
      this.method = 'post';
      this._joinUrl(URI)._setXFormHeader()._send(data)._handleRequset(callback)
    }

  }

  window.AjaxInterface = AjaxInterface;
})(window)