const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000 ;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1>This is shubham</h1> <p>hey this is the way to rock the world!</p>');  
    }else if(req.url=='/'){ 
        res.statusCode=200;
        res.end('<h1>This is about page</h1><p> This is about shubam sharma</p>')
    }else if(req.url=='/hello'){ 
        res.statusCode=200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
    }else{
        res.statusCode=404;
        res.end('<h1>Not Found</h1><p> This page was not found on this server</p>')
    }
})
server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});
//after running this file go to localhost:3000 