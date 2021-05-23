var http = require('http');

http
  .createServer(function(req, res) {
    res.write('Hello, Node.js! Here we come haha'); //write a response to the client
    res.end(); //end the response
  })
  .listen(8000); //the server object listens on port 8080

console.log('Server running on port 8000');
