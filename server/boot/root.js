'use strict';

var path = require('path')
module.exports = function (server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/status', server.loopback.status())

  router.get('/', (req, res) => {
    var indexFile = path.resolve(__dirname,'..','client','public','index.html')
    res.send(indexFile)
  })


};
