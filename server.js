var http = require("http"); // requires the http module that ships with Node.js and makes it accessible through the variable http

function start() {
    function onRequest(request, response) {
        console.log("request recieved");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

exports.start = start;