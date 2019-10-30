// Using FileSystem package to create files.
var fs = require("fs");

// Example JavaScript Object
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 105,
    eyeColor: "red"
};

// Converts a given JS Object to JSON String.
var jsonText = JSON.stringify(person);

// Creates a file, writes the text in jsonText to file.
fs.writeFileSync("saved.json", jsonText, "utf8");