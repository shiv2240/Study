const http = require("http");

const server = http.createServer(function (req,res){
    if(req.url === "/data"){
        res.end("This is data :)")
    }
    res.end("My Server is 2020");
});

server.listen(1000);

