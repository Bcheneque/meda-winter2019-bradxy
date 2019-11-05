const Vehicle = require("./vehicle.js");

const Car = class Car extends Vehicle {
    constructor(make, model, year,color, owner, engineType,topSpeed, license, mileage, mpg, tankSize, ) {
        super(make, model, year, color, owner, engineType, topSpeed);// HAS TO MATCH THE ORDER OF THE CONSTRUCTOR IS EXTENDED TO
        this.license = license;
        this.mileage = mileage;
        this.tankSize = tankSize;
        this.currentFuel = this.tankSize;
        this.MPG = mpg;
    }

     travel(miles) {
        this.currentFuel  = this.currentFuel - (miles/ this.MPG);
        console.log("The" + this.make + this.model + " has " + this.currentFuel.toFixed(1) + " gallons of" + this.engineType + " left.");
     }
}

module.exports = Car;