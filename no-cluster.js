const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type": 'text/plain'});
        res.end("Home Page")
    }else if(req.url==="/slow-page"){
        for(let i =0;i<600000000;i++){}
        res.writeHead(200,{"Content-Type": "text/plain"});
        res.end(`slow ${i}`)
    }
})

server.listen(8000,(req,res)=>{
    console.log("server running");
    
})