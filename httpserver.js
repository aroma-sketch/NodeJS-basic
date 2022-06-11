const http=require("http");
const port=process.env.PORT ||3000;
const server =http.createServer((req,res)=>{
    console.log(req.url)
    res.statusCode =200;
    res.setHeader('content-type','text/html')
    res.end('<h1/> this is aroma gupta</h1><p> i m working ,great work!')
})

server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
} );