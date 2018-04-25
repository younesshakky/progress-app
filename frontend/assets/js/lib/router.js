
function RouterModule() {
  this.base = '#'
  this.registredRoutes = [];
  this.views = []

  return this.init()
}

RouterModule.prototype.init = function () {
  // this._setRoute('/')
  // this._locate()
  this.setupLink()
  this.handleClick()
  this.currentRoute = location.hash;
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
  this.showView(route);
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

RouterModule.prototype.showView = function (route) {
  this.registredRoutes.filter(function (item) {
    if (item.route !== route) return false;

    var view = document.getElementById(item.viewElm)
    this.hideView(this.getCurrentView())
    view.classList.remove('hidden')
  })
}



RouterModule.prototype.hideView = function (view) {
  var view = document.getElementById(view)
  if (view) {
    view.classList.add('hidden')
  }
}

RouterModule.prototype.getCurrentView = function () {
  var route = this.currentRoute.replace('#', '')

  for (item of this.registredRoutes) {
    if (item.route == route) {
      console.log(item.viewElm)
      // return item.viewElm
    }
  }
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
