

const http = require("http"); 

const myserver = http.createServer((req,res)=>{
    console.log(req.headers );
    res.end("<h1>Hello from server! </h1>");
});

myserver.listen(5001,()=> console.log("Server started !")); 

