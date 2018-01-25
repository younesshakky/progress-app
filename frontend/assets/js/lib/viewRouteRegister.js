function ViewRouteRegister(router) {
  this.router = router;
  this.router.registredRoutes = [];
}

ViewRouteRegister.prototype = {
  // binds each route with it's view element
  bind: function (viewsArray) {
    if (isUndefined(viewsArray)) return false;

    viewsArray.forEach(viewModel => {
      let viewObj = this.extractObject(viewModel)
      this.saveModel(viewObj)
    })
  },


  saveModel: function (model) {
    this.router.registredRoutes.push(model)
  },

  extractObject: function (viewModel) {
    return {
      route: viewModel[0],
      viewElm: viewModel[1]
    }
  },

}

// var router = new RouterModule()
// var registerView = new ViewRouteRegister(router);

// registerView.bind([
//   ['/', 'homepage'],
//   ['/about', 'about'], 
//   ['/contact', 'contact'],
// ])

// router.isRegistred('/about', function (route) {
//   console.log(route)
// })
