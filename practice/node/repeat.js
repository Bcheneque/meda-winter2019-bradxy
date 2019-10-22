//Node file
var fs = require("fs");

fs.writeFileSync("repeat.txt","","utf8");

//for (var i = 0; i < 100; i = i + 1) { fs.appendFileSync("repeat.txt", "This is a sample sentence", "utf8");}

for (var i = 0; i < 100; i = i + 1) {

    if (i < 9) {
        var sentence = " (" + ( i + 1) + ") This is a sample sentence.\n";
    } else if ( i > 8 && i < 99) {
        var sentence = "(" + (i + 1) + ") This is a sample sentence.\n";
    } else {
        var sentence = "(" + (i + 1) + ") This is a sample sentence.\n";
    }

    fs.appendFileSync("repeat.txt", sentence, "utf8");

}