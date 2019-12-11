//include into our code, the fs package(built-in).
const fs = require("fs");

//Use the mongoose package so we can talk to MongoDB Atlas.
const mongoose = require("mongoose");
//includes into our code, the express.js, provided by NPM.
const express = require("express");
//includes into our code Body Parser, comes with Express.js
const bodyParser = require("body-parser");
//Create an Express.js server object.
const app = express();
//Includes the HTTP package(built-in), and we attach our Express server object to the HTTP object.
const http = require("http").Server(app);
//we create a variable that will hold the port number we want to use.
const port = 3000;
//we pass the port variable to the listen function for the HTTP server.
http.listen(port);

//URL to access our MongoDB
const dbConnect = "mongodb+srv://practiceUser:Rammstein6@clusterpractice-hv84h.mongodb.net/commentsproject?retryWrites=true&w=majority";

//Additional options when connecting to MongoDB
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

//Actually connect to MongoDB Atlas.
mongoose.connect(dbConnect, options, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Successfully connected to MongoDB Atlas!");
  }
});

//link up MongoDB errors with the console, and link up the definition of Promises to Mongoose.
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB error"));
mongoose.Promise = global.Promise;

//Building a MongoDB Schema.
let Schema = mongoose.Schema;
let commentsSchema = new Schema({
  message: String,
  firstName: String,
  lastName: String,
  email: String,
  age: Number,
  timeStamp: Date,
});

// Create a model for the comments collection using the comments Schema
let commentsModel = new mongoose.model("comments", commentsSchema);

//signifying the Developer that Express.js is now running.
console.log("Express server running on port" + port);

//Needed to read data sent through POST request.
app.use(bodyParser.json());
//Gives Body Parser specific options to run off of
app.use(bodyParser.urlencoded({extended: false}));

//Custom Code for Express.js  after this line.

 //Variable to make sure the file name is the same everytime.
 let filename = "commentHistory.json";

//ROUTES
//First Argument is the route name, second argument is directory to load when someone requests the route name.
app.use("/", express.static("client/"));

//An HTTP Post Handler called /submitComment, Dont mix the request and response order
//First Argument is HTTP Post route name, second argument is the callback function. The callback function will run every time someone requests the /submitComment Post handler.
//Callback function parameters: requests holds the object that was sent to us through the internet, the response object holds a reference of where to send the response to (like IP address)
app.post("/submitComment",(request, response) => {

  //Rename the data sent to us(located in request.body)to something simpler like objectFromRequest.
    let objectFromRequest = request.body;

    console.log(objectFromRequest);

      response.sendStatus(200);
    let text = objectFromRequest.message;
   console.log("We received a request for updateData" + text);

   objectFromRequest.age = parseInt(objectFromRequest.age);
   objectFromRequest.timeStamp =new Date();

   let newComment =new commentsModel(objectFromRequest);
    newComment.save((error) => {
      if(error) {
        console.log(error);
      } else {
        console.log("Save a new comments to the database!");
      }
    });
    

//If the file exists do ...
  if (fs.existsSync(filename)) {

    //... read the file and store the contents in the variable comments...
    let comments = fs.readFileSync(filename, "utf8");
    // ...Parse the JSON and reuse the same comments variable...
     comments = JSON.parse(comments);
//...add the new objectFromRequest object to the array inside of the comments object...
      comments.commentsArray.push(objectFromRequest);
//... then convert comments back into a string as JSON.
      comments = JSON.stringify(comments);
//... finally save the JSON string to a file.
     fs.writeFileSync(filename, comments, "utf8");
      console.log("New Comment Saved to Hard Drive!");
  
    } else {
        //If the file doesn't exists...
        //We pre-build the object(which includes the comment we just receive) to save as JSON.
        let comments = {
            commentsArray: [objectFromRequest]
        };
        //..Convert it actual JSON string...
        comments = JSON.stringify(comments);
        //...Finally save JSON string to new file.
      fs.writeFileSync(filename, comments, "utf8");
      console.log("Note: No Save File detected, creating New File. New Comment saved to Hard Drive")

    }

    //if you dont want to send any data back, you can use .sendStatus(). You can only use sendStatus or send once to "fulfill" front-end request.
    response.sendStatus(200);

    //let data = {
       // text: "Thank you for your message"
   // }
     //response.send(data);
});

//A second HTTP Post Handler called /loadComments
app.post("/loadComments", (request, response)=> {

// Read all the comments from MongoDB Atlas.
commentsModel.find({}, (error, results) => {
   if (error) {
   // if error, tell me about it.  
     console.log(error);
   } else {
    // Build an object that the front-end expects... 
     let objectToSend = {
       commentsArray: results
     }
    //... and send it. 
     response.send(results);
   }
});

     //Check if the JSON file exists...
     if(fs.existsSync(filename)) {

         //...if it exists then read it ...
       let comments = fs.readFileSync(filename, "utf8");
         //... and convert to a JavaScript Object...
         comments = JSON.parse(comments);
     //...finally send it to the requester   
        response.send(comments);
   } else {
         //... if it doesn't exist, then send an error 500 to the requester.
     response.sendStatus(500);
    }
  });
