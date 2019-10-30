var fs = require("fs");
//Math.random();

// Converts a JSON string into an actual JavaScript Object
//JSON.parse();

//Converts a JavaScript Object into actual JSON string.
//JSON.stringify();


var exampleObject = {
   mainkey: 105, 
   isThisTrue: true,
   someText: "some Text!",
   arrays : [100, "string", false],
   childObject: {nestedKey: "inside"},
   aCoolFunction: function(){
      console.log("I am a method that belongs to exampleObject");
   } 

};

console.log(exampleObject.mainkey);
console.log(exampleObject["mainkey"]);
exampleObject.mainkey = 106;
exampleObject.mainkey2 = 120;

exampleObject.aCoolFunction();

//Console logging a normal object.
console.log(exampleObject);

var jsonText = JSON.stringify(exampleObject);
//Console logging JSON representation of the same object.
console.log(jsonText);

fs.writeFileSync("exampleJSON.json", jsonText,"utf8");
console.log("File successfully written!");