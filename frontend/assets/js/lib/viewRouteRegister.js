function ViewRouteRegister (router) {
  this.router = router;
  this.router.registredRoutes = [];
  
}

ViewRouteRegister.prototype = {
  // binds each route with it's view element
  bind: function (viewsArray) {
    return viewsArray == undefined 
    ? this 
    : viewsArray.forEach(viewModel => {
      let viewObj = {
        route: viewModel[0],
        viewElm: viewModel[1]
      }
      console.log(viewObj)
      this.router.registredRoutes.push(viewObj)
    });
  },

  regView: function (className) {

  },

  regRoute: function (route) {

  }
}

var router = new RouterModule()
var registerView = new ViewRouteRegister(router);


registerView.bind([
  ['/', 'homepage'],
  ['/about', 'about'], 
  ['/contact', 'contact'],
])

router.isRegistred('/about', function (route) {
  console.log(route)
})
