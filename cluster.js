const http = require('http');
const cluster = require('cluster')
const OS =require('os');

console.log(OS.cpus().length);

if(cluster.isMaster){
    console.log(`master process ${process.pid} is running`);
    for(let i =0; i<OS.cpus().length; i++){
        cluster.fork();
    }
}else{
    const server = http.createServer((req,res)=>{
        if (req.url ==="/"){
            res.writeHead(200,{"Content-Type": "text/plain"});
                res.end("home")
           }else if(req.url ==="/slow"){
            for(let i =0;i< 5000000000;i++){
            }
            res.writeHead(200,{"Content-Type": "text/plain"})
            res.end("slow")
           }  
          
    })

    server.listen(8001,()=>console.log("server is running")
)
   
console.log(`worker process ${process.pid} is running`);

}