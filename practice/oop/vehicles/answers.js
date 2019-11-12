const fs = require("fs");

let data = fs.readFileSync("carInventory.json", "utf8");


data = JSON.parse(data);


console.log(data.cars[49].MPG);


//let carsArray = data.cars; 
//carsArray.length or data.cars.length

//What is the average miles per gallon pf these 100 cars.
//To find out the average, we add up all the MPG properties and divide by how many cars there were.
   
     let total = 0;

for ( let i = 0; i < data.cars.length; i++) {
    total = total + data.cars[i].MPG;
}

let mpgAverage = total / data.cars.length;

console.log("What is the average miles per gallon on these 100 cars?");
console.log(mpgAverage + "MPG");
//console.log(total);

//QUESTION 1 END

console.log(Cars[0].year);

let carsBetween1940and1960 = 0;
for (let i = 0; i < cars.length + 1; i++) {
    //console.log(cars[i]);

    let currentCar = cars[i];

    if(currentCar.year >= 1940 && currentCAr.year <= 1960) {
        carsBetween1940and1960 = carsBetween1940and1960 + 1;
      //  carsBetween1940And1960 +=1;
     //   carsBetween1940Aand1960++; // adds only 1.
    }
    
   // if (currrentCar.year >=1940) {
      //  if (currentCar.year <=1960) {
     // }
   // }
}

console.log(carsBetween1940and1960);
  //  console.log(cars[cars.length - 1].year);

