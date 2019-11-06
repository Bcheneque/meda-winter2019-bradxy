const Vehicle = require("./vehicle.js");

const Truck = class Truck extends Vehicle {
  constructor(make, model, year, color, owner, topSpeed, license, mileage, tankSize, transportType, capacity, mpg) {
    super(make, model, year, color, owner, "diesel", topSpeed);
    this.license = license;
    this.mileage = mileage;
    this.tankSize = tankSize;
    this.transportType = transportType;
    this.capacity = capacity;
    this.MPG = mpg;
  }

    // Can this truck handle the weight?
    // Is the tons less than or equal to the capacity that this truck can handle?
  transport(tons) {
    if (this.capacity < tons) { 
      console.log("No, the " + this.model + " can't carry " + tons + " tons.");
    } else {
      console.log("Yes, the " + this.model + " can carry " + tons + " tons.");
    }
    return  this.capacity >= tons; 
  } 


}

module.exports = Truck;