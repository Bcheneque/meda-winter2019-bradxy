const car = require("./car.js");


let honda = new car ("Honda", "Civic", 2000, "red","sam", " gasoline", 100, "8EFD39E9", 125000, 35, 12);

console.log(honda);
honda.travel(100);
honda.travel(100);
honda.travel(100);
honda.travel(100);
honda.travel(100);
honda.refuel(10);
honda.travel(100);

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




