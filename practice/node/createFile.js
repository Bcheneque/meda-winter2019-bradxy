var fs = require("fs");

// Write files, will ovewrite existing filesnames.
fs.writeFileSync("my first file.txt", "I was created by a JavaScript Project", "utf8");

fs.writeFileSync("my second file.txt", "this is my second file", "utf8");

// Read files, must load as utf8 to make sense.
var textThatWasReadFromFile = fs.readFileSync("some-file.txt", "utf8");

//Update files, adds to the end of the file.
fs.appendFileSync("some-file.txt", "This text file was updated.", "utf8");

console.log(textThatWasReadFromFile);