const http = require ('http');
const fs = require ('fs');
let readableStream = fs.createReadStream('./data/info.txt', 'utf8');

http.createServer(function (req, res) {
    if ((req.url = "/story")) {
        res.writeHead(200, {"Content-Type": "text/plain"});
        readableStream.pipe(res);
    }
}).listen (5000, "localhost")


console.log("listening to http://localhost:5000")