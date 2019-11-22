//USE THE EXPRESS PACKAGE
const express = require("express");

//run the express sever.
const app = express();

//feed express server to the HTTP Package.
const http = require("http").Server(app);

const port = 8080;

//tell HTTP to which port to listen to.
http.listen(port);

console.log("The express server is running on port" + port + "!");

//express routes.
app.use("/client", express.static("./web_files/") );
//app.use("/profile", express.static("user/") );

app.use("/myproject", express.static("../../../../Git Repositories/project3_Bradxy/portfolio/") );

//http://localhost:8080/client -> Gets sent to -> web_files folder