var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("request for " + pathname + " recieved");
        route(handle, pathname, response, request);
        request.setEncoding("utf8");
    }
    
    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

function route(handle, pathname, response, postData) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postData);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }

}

exports.route = route;
exports.start = start;