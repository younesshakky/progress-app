function App (settings) {
  if (settings.el) this.setRootElm(settings.el);
}

App.prototype.fn = App.prototype = {
  setRootElm: function (element) {
    this.$el = document.querySelector(element)
    return this;
  }
}

App.prototype.proxy = new AjaxInterface({
  endPoint: 'http://localhost:9000/api'
})

var myApp = new App({
  el: '#app'
})

