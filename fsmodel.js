const fs = require('fs');

// fs.readFile('index.js','utf8',(err, data)=>{
//     console.log(err,data);
// })

const a = fs.readFileSync('index.js','utf8',(err, data)=>{
    console.log(err,data);
})

fs.writeFile('file.txt','This is data', ()=>{
    console.log('written to the file');
} )
// console.log(a.toString());
