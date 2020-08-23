//CORE
var http = require("http");
var url = require("url");
var querys = require("querystring");
//LOCAL
var log = require("./modules/log");
//NPM
var { countries } = require("../node_modules/countries-list");

var server = http.createServer(function (request, response) {
  var parsed = url.parse(request.url);
  var pathname = parsed.pathname;
  var query = querys.parse(parsed.query);

  if (pathname == "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<html><body><p>Home page</p></body></html>");
    response.end();
  } else if (pathname == "/exit") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<html><body><p>Largo</p></body></html>");
    response.end();
  } else if (pathname == "/country") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(countries[query.code]));
    response.end();
  } else {
    response.writeHead(400, { "Content-Type": "text/html" });
    response.write("<html><body><p>NOT FOUND</p></body></html>");
    response.end();
  }
});

server.listen(4000);
console.log("PORT 4000");
