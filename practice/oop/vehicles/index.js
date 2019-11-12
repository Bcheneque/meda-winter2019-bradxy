// UNITS is American, Miles and Gallons
const fs = require("fs");
const _ = require("lodash");

const Car = require("./car.js");
const Helicopter = require("./helicopter.js");

let honda = new Car ("Honda ", "Civic", 2000, "red","sam", " gasoline", 100, "8EFD39E9", 125000, 35, 12);

console.log(honda);
honda.travel(100);
honda.travel(100);
honda.travel(100);
honda.travel(100);
honda.travel(100);
honda.refuel(10);
honda.travel(100);

function createCar(make){
    let randomCar = new Car( make, "model", _.random(1930, 2020),"transparent ", "user ","gasoline ", _.random(0, 110), _.random(0,300000 ), _.random(1111111, 9999999) , _.random(1, 40), _.random(28,240) );

    return randomCar;
};

let container = {
    cars: []
}

for (let i = 0; i < 100; i++){
container.cars.push(createCar("car " + i));
}

let stringifiedData = JSON.stringify(container);
//stringifyCar = JSON.stringify(randomCar);
fs.writeFileSync("carInventory.json", stringifiedData, "utf8");

console.log(container.cars[80].make);

 //console.log(randomCar);

const Truck = require("./truck.js");

let commercialTruck = new Truck ("mercedes", "semi", 2010, "black", "farmers", 100, "6GHT76O0", 250000, 15, "tomatoes", 40, 20);

console.log(commercialTruck);

console.log(commercialTruck.engineType);

const firstTest = commercialTruck.transport(39);

console.log(firstTest);

const secondTest = commercialTruck.transport(40);

console.log(secondTest);

const thirdTest = commercialTruck.transport(50);

console.log(thirdTest);



// Functions are instructions
// They often deal with concepts (variables) that are not
// determined until we actually need to use that function.




