var proxy = new AjaxInterface({
  endPoint: 'http://localhost:9000/api'
});

proxy.get('/test/load', function (res) {
  console.log(res)
})