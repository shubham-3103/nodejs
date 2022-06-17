const express =  require('express');
const app = express();

function logInfo(req,res,next){
    console.log('Hello from logInfo() Middleware...');
    next();
};

app.use(logInfo);
app.get('/', function(req,res){
     res.send("Welcome to index page");
});

app.listen(3000, ()=>{
    console.log(`Server is listening on port ${3000}`);
});
