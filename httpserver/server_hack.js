
const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    // console.log(req.url);  // give the url name what the user type
    if(req.url=='/'){
        res.end("This is response Aman Kesharwani");
        console.log(req.url);
    }
    else if(req.url=='/about'){
        res.end("This is AboutUs side");
        console.log(req.url);
    }
    else if(req.url=='/contact'){
        // res.write("This is ContactUs side")
        // res.end();
            // or
        res.end("This is ContactUs side")    
        console.log(req.url);
    }
    else if(req.url=='/whatsapp'){
        res.end("This is WhatsappUs side");
        console.log(req.url);
    }
    else if(req.url=='/UserAPI'){
        fs.readFile(`${__dirname}/json1_.json`,"utf-8",(err,data)=>{
            console.log(data);
            res.end(data);
        })
        // res.end("This is from userapi side");
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1> 404 error page.Page does't exit </h1>");
        console.log(req.url);
    }
   
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("listing to the port no 8000");
});