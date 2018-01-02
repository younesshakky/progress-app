(function (window) {

  function AjaxInterface(settings) {
    this.method;
    this.endPoint;
    this.xhr = new XMLHttpRequest();

    Object.assign(this, settings)
  }

  AjaxInterface.prototype = {

    // set request method
    _setMethod: function (method) {
      this.method = method;
      return this;
    },

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
    setHeader: function (key, value) {
      this.xhr.setRequestHeaders(key, value)
      return this;
    },
    
    // recieves Object
    _appendHeaders: function (headers) {
      for (header in headers) {
        this.setHeader(header, headers[header])
      }

      return this;
    },

    _setXFormHeader: function () {
      this._setHeader('Content-Type', 'application/x-www-form-urlencoded');
      return this;
    },

    // returns full API URL
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
        alert('something went very seriously wrong')
        if (isFunction(callback)) {
          callback()
        }
      }

      return this;
    },
    
    // requset methods

    get: function (URI, callback) {
      this._setMethod('get')
          ._joinUrl(URI)
          ._send()
          ._handleRequset(callback)
    },

    post: function (URI, data, callback) {
      this._setMethod('post')
          ._joinUrl(URI)
          ._setXFormHeader()
          ._send(data)
          ._handleRequset(callback)
    },

    put: function (URI, data, callback) {
      this._setMethod('put')
          ._joinUrl(URI)
          ._setXFormHeader()
          ._send(data)
          ._handleRequset(callback)
    }

  }

  window.AjaxInterface = AjaxInterface;
})(window)