
function RouterModule() {
  this.base = '#'
  this.realCurrentRoute;
  this.registredRoutes = [];

  return this.init()
}

RouterModule.prototype.init = function () {
  // this._setRoute('/')
  // this._locate()
  this.setupLink()
  this.handleClick()
  return this
}

RouterModule.prototype.navigate = function (route, done) {
  if (this.currentRoute === route) { return false }

  this._setRoute(route)
  this._locate()

  return callbackify(done, route)
}

RouterModule.prototype.isRegistred = function (route, cb) {
  return this.registredRoutes.length <= 0
    ? false
    : this.registredRoutes.filter(function (regRoute) {
      regRoute.route == route
      ? callbackify(cb, regRoute)
      : false
    })
}

RouterModule.prototype._setRoute = function (route) {
  this.current = this.base + route
  return this
}

RouterModule.prototype._locate = function () {
  window.location.assign(this.current)
}

RouterModule.prototype.handleClick = function () {
  var elements = document.querySelectorAll('[data-link]');
  var self = this;
  elements.forEach(item => {
    item.onclick = function (e) {
      e.preventDefault()
      self.navigate(item.dataset.link)
    }
  })
}

RouterModule.prototype.setupLink = function () {
  var elements = document.querySelectorAll('[data-link]');
  elements.forEach(item => {
    item.href = item.dataset.link;
  })
}



/**
 * usage
 * 
 * var router = new RouterModule();
 * var homeComponent = new ComponentClass('homeComponent')
 * 
 * navigate to some route
 * router.navigate('/', component)
*/
