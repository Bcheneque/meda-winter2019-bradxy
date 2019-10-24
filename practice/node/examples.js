var fs = require("fs");

var doubleQuotes = "This is a string";
varSingleQuotes = "This is a string";
varStringLiterals = `This
is
a
string`;

var html =
"<html>" +
"<head>" +
"<styles></styles>";
"</head>";
"<body></body>";
"</html>";

var html2 = "<html><head><style></style></head><body></body></html>";

var file = "sample.html";

var html3 = `
<html>
    <head>
        <style></style>
    </head>

    <body>

    </body>
</html>
`;
//static
fs.writeFileSync("sample.html", html3,"utf8");
//dynamic
fs.writeFileSync(file, html3,"utf8");

//Update this script to write the text of html3 to a file called sample.html