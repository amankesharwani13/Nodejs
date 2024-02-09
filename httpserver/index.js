const http=require('http');
const hostname="localhost";
const port=3000;
const fs=require("fs");

const home=fs.readFileSync("./index.html","utf-8");

const server=http.createServer((req,res)=>{         //creating server
     console.log(req.headers);
     if(req.url==="/"){
        return res.end(home);
     }
     else if(req.url==="/about"){
        console.log("About Page");
     }
     else{
        console.log("404 Error");
     }
    //  res.statusCode=200;
    //  res.setHeader('Content-Type','text/html');
    //  res.end('<html><body> <h1>Server connection sucess:)</h1></body></html>')
});
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
});


