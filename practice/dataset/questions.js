const fs = require("fs");

const data = fs.readFileSync("2018entries.json", "utf8");

data = JSON.parse(data);


//Question 1
console.log("What month had the most evictions? ");






class EvictionNotice {
    constructor (month, zip, ellisAct, condoConversion) {
        this.month = month;
        this.zip = zip;
        this.ellisAct = ellisAct;
        this.condoConversion = condoConversion;
    }
}

console.log( stringToObject(data.data[1000]) );

function sringToObject(string) {
    //Split up the entry string into its individual parts.
    let entryArray = string.split(",");

    //Split up the Date string into multiple parts.
    let entryDate = entryArray[5].split("/");

    //Create a new Object and provide the proper values.
    let evictioObject = new EvictionNotice (entryArray[0] , entryArray[4], entryArray[17], entryArray[18] );
    
    //Return new object to call location.
    return evictioObject;
}