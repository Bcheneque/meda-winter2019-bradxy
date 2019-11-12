const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const http = require("http").Server(app);

const port = 3000;

http.listen(port);

console.log("Express server running on port" + port);

//Needed to read data sent through POST request.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Custom Code for Express.js  after this line.

//ROUTES
//website is a folder but it can be use /"" by itself
//app.use("/website", express.static("client/") );
app.use("/", express.static("client/"));

//Dont mix the request and response order
app.post("/updateData",(request, response) => {

    let objectFromRequest = request.body;

    console.log(objectFromRequest.message);

    let text = objectFromRequest.message;

    console.log("We received a request for updateData" + text);

    //if you dont want to send any data back, you can use .sendStatus(). You can only use sendStatus or send once to "fulfill" front-end request.
    //response.sendStatus(200);

    let data = {
        text: "Thank you for your message"
    }
     response.send(data);
});
