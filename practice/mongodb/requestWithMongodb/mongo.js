const mongoose = require("mongoose");

const dbConnect = "mongodb+srv://commentsProjectUser:Bayekofsiwa6@clusterpractice-hv84h.mongodb.net/test?retryWrites=true&w=majority"

const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true

};

mongoose.connect(dbConnect, options, (error) => {

if(error) {
    console.log("Something happened connecting to the database! cannot connect.", error);
} else {
    console.log("Successfully onnected to MongoDB!");
}

});