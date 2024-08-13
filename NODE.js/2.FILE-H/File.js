const { log } =  require("console");
const fs  =  require("fs");


/*

// Write Sync 
fs.writeFileSync("./2.File-H/Test.txt","Radhe! Radhe!");

// Write Async
fs.writeFile("./2.File-H/Test2.txt","Radhe! Radhe!",(err)=>{},);

// Read Sync
let result = fs.readFileSync("./2.File-H/Test.txt",'utf-8');
log(result);

// Read Async (how we know an async fn can'nt return anything <promise>)
result =  fs.readFile("./2.File-H/Test.txt","utf-8",(err , res)=>{
    log(res);     
})

log(result); // undefined ! 


// +++++++++ =apend= ++++++++++

// Sync
fs.appendFileSync("./2.File-H/Test.txt","\njay jaiy.... 💞🙏🏼");

// Async
fs.appendFile("./2.File-H/Test.txt","\nJai shree Krishana",(errr)=>{});  

*/

fs.mkdirSync("./2.File-H/GIT/git/git/git",{recursive :true});

// fs.unlinkSync("./2.File-H/Test.txt")