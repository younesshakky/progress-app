function RouterModule () {
  this.base = '#'
  this.current = this.base + '/'
  this.registredRoutes = []
}

RouterModule.prototype = {
  go: function (route, callback) {
    if (this.currentRoute == route) {
      return;
    }
    this._setRoute(route)
    return callback(route)
  },

  isRegistred: function (route, callback) {
    return this.registredRoutes.length <= 0
    ? false
    : this.registredRoutes.filter(function (regRoute) {
      regRoute.route == route ? callback(regRoute) : false
    })
  },

  _setRoute: function (route) {
    console.log(route)
    this.current = this.base + route
  }
}

