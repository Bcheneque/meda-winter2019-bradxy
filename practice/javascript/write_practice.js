//Using fileSystemn package to create files.
var fs = require("fs");
//Example JavaScript Object
var pet={
    name: "Magdalena", 
    breed: "american Bully",
    color:"brown",
    age:5
};
//Converts a given JS object to JSON string
var jsonText = JSON.stringify(pet);
fs.writeFileSync("saved.json", jsonText, "utf8")