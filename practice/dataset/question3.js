const fs = require('fs');
const _ = require('lodash');

class EvictionNotice{
    constructor(month, zip, ellisAct, condoConversion, neighborhood){
        this.month = month;
        this.zip = zip;
        this.ellisAct = ellisAct;
        this.condoConversion = condoConversion;
        this.neighborhood = neighborhood;
    }

}


// Read our filtered dataset.
let evictionData = fs.readFileSync('2018entries.json', 'utf8');
// Convert the filtered dataset to a living JS object.
let evictionDataObject = JSON.parse(evictionData);
//console.log(typeof evictionDataObject);

//console.log(evictionDataObject);

const dataArray = [];
//Loop though each string inside of the data key array inside the "evictionDataMasterObject" variable.
for(let i = 0; i < evictionDataObject.data.length; i++){
    dataArray.push(stringToObject(evictionDataObject.data[i]));
}

//Question 3
//Homework: Answer the Question using code, due monday 25th (use neighborhood array)
console.log("Which zip code had the most evictions for 2018?");

let zipCodes = "94102 94103 94104 94105 94107 94108 94109 94110 94111 94112 94114 94115 94116 94117 94118 94121 94122 94123 94124 94127 94128 94129 94130 94131 94132 94133 94134 94143 94158 94188".split(" ");

zipCodes = zipCodes.concat("94119 94120 94125 94126 94140 94141 94142 94146 94147 94159 94164 94172".split(" "));

zipCodes = zipCodes.concat("94137 94139 94144 94145 94151 94160 94161 94163 94177".split(" "));

// Create variables to keep track of the highest number, and month.
let highestValueZip = 0;
let highestZipIndex = -1;



//loop through zip array
for(let i =0; i < zipCodes.length; i++){
    if(highestValueZip < zipCodes[i]){
        highestValueZip = zipCodes[i];
        highestZipIndex = i;
    }
}

console.log('The zipcode: ' + highestValueZip + ' had the most evictions in SF.');
console.log('Number of evictions: ' + highestZipIndex  );

let whichHood= dataArray.neighborhood;

for(let i = 0; i <= evictionData.length; i++){
   
}
    
    

function stringToObject(string){
    //split up entry string into its individual parts.
    let entryArray = string.split(',');

     // Split up the Date string into multiple parts.
     let entryDate = entryArray[5].split("/");

     // Create a new object and provide the proper values.
     let evictionObject = new EvictionNotice(entryDate[0], entryArray[4], entryArray[17], entryArray[18], entryArray[27]);
 
     // Return new object to call location.
     return evictionObject;

}