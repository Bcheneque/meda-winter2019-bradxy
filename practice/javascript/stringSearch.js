var fs = require("fs");
var terminalArguments = process.argv;

var textFromFile = fs.readFileSync(terminalArguments[2], "utf8");

characterSearch(textFromFile, terminalArguments[3]);

//var text = "This is an exmple string!";
//var text2 = "This is another string eaxmple";

characterSearch("This is yet another string", "i");

characterSearch("This is another string!", "0");

function characterSearch(text,letter){
    console.log("Searching the string: " + text);


    var foundLetters = 0;

 for (var i = 0; i < text.length; i++) {


    if (text.charAt(i) == letter) {
        //console.log("We found an " + letter + "at index" + i);
        foundLetters = foundLetters + 1;
        //foundLetters++ , adds one to the existing variable.
        //foundLetters += 2 , a lot like ++ but adds one to existing variable.
    }
 }

 console.log("We found a total of" + foundLetters + " " + letter + "'s")

}