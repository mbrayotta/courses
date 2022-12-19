const http = require('http');
const routes = require('../routes/courses')

//port
const port = 4000

//server
const server = http.createServer(routes.requestHandler)
server.listen(port);