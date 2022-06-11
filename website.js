const fs =require('fs')
const http=require("http");

const port=process.env.PORT ||3000;

const server =http.createServer((req,res)=>{
    
    res.setHeader('content-type','text/html')
    console.log(req.url)

    if(req.url == "/")
    { res.statusCode =200;
    res.end('<h1/>....WELCOME PAGE....</h1><p> i m working ,great work!');
}

else if(req.url == "/about")
{ res.statusCode =200;
    res.end('<h1/>I AM AROMA gupta</h1><p> i m working ,great work!');
}
else if(req.url == "/home")
{ res.statusCode =200;
    const b=fs.readFileSync('index.html');
    res.end(b.toString());
}
else{
    res.statusCode =404; 
    res.end('<h1/> page not found</h1>');
}
})
server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
} );