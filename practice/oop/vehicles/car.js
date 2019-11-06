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

        if (this.currentFuel <= 12) {

            if(this.currentFuel * this.MPG >= miles) {
        this.currentFuel  = this.currentFuel - (miles/ this.MPG);
        console.log("The" + this.make + this.model + " has " + this.currentFuel.toFixed(1) + " gallons of" + this.engineType + " left."); 
            }else {
                console.log("The " + this.make + " " + this.model + "doesn't have enough fuel to travel that far.");
            }
     }  else {
         console.log("The " + this.make + " " + this.model + "has no gas.");
     }
        } 

        refuel(gallons) {

            if(gallons <=0) {
            console.log("You need to provide fuel(positivenumber).");
            return 1;
              
            } else {
                if (gallons >= this.tankSize) {
                    console.log("You provided too much fuel, cannot fit into tank.");
                } else {

                    if(this.tankSize - this.currentFuel < gallons) {
                        console.log("There is not enough free space in the fuel tank to add that many gallons.");
                    } else {
                        this.currentFuel = this.currentFuel + gallons;
                        console.log(this.model + " was successfully refueled with " + gallons + " gallons of gas.");
                    };

                }
                }
            }
        }  


module.exports = Car;