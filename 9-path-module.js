//import path module
const path = require("path");

console.log(path.sep); // \

//to join and/or normalize the path
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath); // \content\subfolder\test.txt

//get the basename
const base = path.basename(filePath);
console.log(base); // test.txt

//returns an absolute value
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute); // C:\Users\Dodi\Desktop\node-learn\content\subfolder\test.txt
