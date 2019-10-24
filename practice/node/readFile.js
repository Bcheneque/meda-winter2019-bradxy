var fs = require("fs");

//receives text as a string and stores it in the variable text.
var text = fs.readFileSync("repeat.txt","","utf8");


 console.log(text);   

