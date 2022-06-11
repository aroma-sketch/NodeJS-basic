const fs = require('fs');

// simple readfile method
// fs.readFile('file.txt' ,'utf8',(err,data)=>{
//     console.log(err,data)
// })


// sync file to call first
const a=fs.readFileSync('file.txt')
    console.log(a.toString())

   
    // simple writefile method
//  fs.writeFile('file2.txt' ,"this is  data",()=>{
//      console.log("this is from text file 2")
//  })


// sync file to call first
const b=fs.writeFileSync('file3.txt',"this is dattaa")
console.log(b)



console.log("finished reading file");