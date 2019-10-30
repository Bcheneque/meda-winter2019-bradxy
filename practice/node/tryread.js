//IMPORT FS package
var fs = require ("fs");

// try to run the following code.
try {
    var fileText = fs.readFileSync("example.txt", "utf8");
   //... if there is an error, then run the following. 
} catch (e) {
    console.log("we tried to read the example.txt but it seems it doesnt exist, we have created for you.");

    fs.writeFileSync("example.txt", "", "utf8");
//Whether there was an error or not, run this.
} finally {
    fs.appendFileSync("example.txt", "this is a string.\n", "utf8");
}
// Because of code was in a try catch, it will not stop the program, and will complete.
console.log("The program has finished!");