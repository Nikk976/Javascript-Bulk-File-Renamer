const fs = require('node:fs');
const path = require("path");
const folder = __dirname;
const prompt = require('prompt-sync')({ sigint: true });;
const  replaceThis = prompt("Enter the file name you want to rename ");
const replaceWith = prompt("Enter the new file name you want to rename ");
const preview = false;

try {
  fs.readdir(folder,(err,data)=>{
    for(let i = 0; i < data.length; i++) {
        let item = data[i];
        let newFile = path.join(folder,item.replaceAll(replaceThis,replaceWith));
        let oldFile = path.join(folder,item);
        if (!preview){
            fs.rename(oldFile,newFile,()=>{
                console.log("Rename Success");
            })
        }
        if (newFile !== oldFile) console.log(oldFile + " will be replaced with "+ newFile);
        
    }
  })
} catch (err) {
  console.error(err);
}