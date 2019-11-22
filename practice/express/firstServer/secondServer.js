const express = require("express");

const app = express();

const http = require("http").Server(app);

const port = 50000;

http.listen(port);

console.log("The express server is running on port" + port + "!");

app.use("/client", express.static("./web_files/") );

app.use("/myproject", express.static("../../../../Git Repositories/my_hobby/myhobby.html") );
//http://localhost:50000/client 
