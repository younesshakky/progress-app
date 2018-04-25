function App (settings, options) {
  if (settings.el) this.setRootElm(settings.el);
}

App.prototype = {
  setRootElm: function (element) {
    this.$el = document.querySelector(element)
    return this;
  },

  proxy: new AjaxInterface({
    endPoint: 'http://localhost:9000/api'
  }),

  router: new RouterModule(),

  registerView: function (viewsArr) {
    var registrer = new ViewRouteRegister(this.router);
    return registrer.bind(viewsArr)
  }
}


var appModule = new App({
  el: '#app'
})

appModule.proxy.get('/', function (res) {
  console.log(res)
})


appModule.registerView([
  ['/', 'homepage'],
  ['/about', 'about'],
  ['/contact', 'contact'],
])


