// Use the mongoose package so we can talk to MongoDB Atlas.
const mongoose = require("mongoose");

// The credentials and location to log into the MongoDB account. This should normally be somewhere else that's more secure.
//const dbConnect = "mongodb+srv://commentsProjectUser:Bayekofsiwa6@clusterpractice-hv84h.mongodb.net/test?retryWrites=true&w=majority"

//The credentials and location to log into the MongoDB account. This should normally be somewhere else that's more secure.
const dbConnect = "mongodb+srv://practiceUser:Rammstein6@clusterpractice-hv84h.mongodb.net/test?retryWrites=true&w=majority"

// Additional options when connecting to MongoDB.
const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true

};

// Actually connect to the MongoDB database. Attach the login credentials string and the options object.
mongoose.connect(dbConnect, options, (error) => {

// When MongoDB server responds, test if an error was received.
if(error) {
// If there was an error, display it. 
    console.log("Something happened connecting to the database! cannot connect.", error);
} else {
 // If no error, congratz!   
    console.log("Successfully onnected to MongoDB!");
}

});

// Store the object "connection", in a variable called db
let db = mongoose.connection;

// Hookup any MongoDB errors we receive to the console.
db.on("error", console.error.bind(console, "MongoDB connection error: "));

// Tell mongoose what a Promise is by providing the Class to it.
mongoose.Promise = global.Promise;

// Finished connecting to MongoDB.

// A Schema for our database.
let Schema = mongoose.Schema;

// Customize our schema and name it practiceSchema
let practiceSchema = new Schema({ 
    note: String,
    old: Boolean,
    timesUpdate: Number
});
// Create a new model that has the Schema
let practiceModel = new mongoose.model("myFirstCollecntion", practiceSchema);

//let newEntry = new practiceModel({
  //  programID: "209iif2",
  //note: "This is the first note on the database",
  //old: false,
  //timesUpdate: 2
  //});

//newEntry.save((error) => {
  // if(error) {
  //console.log("There was an error at MongoDB Atlas" + error);
// } else {
//  console.log("we saved the data!")
//}
//});

// READ
// An object wit the criteria to search the database with.
let searchCriteria = {
    timesUpdated: {$lt: 110},

};
// Actually search the database.
practiceModel.find(searchCriteria, (error, results) => {
    //if error, then
    if(error) {
    // Tell us about it.    
        console.log("Something went wrong!" + error);
    } else {
     // Otherwise console.log the entries found.   
        console.log(results);
    }
});

// Data to update the targeted entry with the right id.
let dataToUpdate = {
    old: true,
    city: "San Francisco"
};

//UPDATE

// Submit the request to MongoDB with the proper id and data to update.
practiceModel.findByIdAndUpdate("5ddc22d226eac840aa08a01a", dataToUpdate, (error, results) => { 
    if (error) {
        console.log("Something happened" + error);
    } else {       
        console.log(results);
    }
});

//DELETE

// First Argument is the id of the entry to delete, second argument is the callback function that runs when MongoDB responds with success or failure.
practiceModel.findByIdAndDelete("5ddc22a264caa240930553d1");
