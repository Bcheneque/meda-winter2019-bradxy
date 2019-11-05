// EXTEND ANIMAL TO MAMMAL AND UPDATE MAMMAL CONSTRUCTOR FOR HOMEWORK

//class for mammals type
class Mammal {
    // constructor method must be included and will run when creating objects of this class, this one has many parameters
     constructor(type, limbs, mouth, nose, eyes, tail, hair, mammary, life, heightInches, weightLb){
         //keyword this refers to the current object being created, the value refers to the parameter.
         this.type = type;
         this.limbs = limbs;
         this.mouth = mouth;
         this.nose = nose;
         this.eyes = eyes;
         this.mammary = mammary;
         this.lifeExpectancy = life;
         this.hair = hair;
         this.heightInches = heightInches;
         this.weightLb = weightLb;
         this.tail = tail;
         this.age = 0;
 
         console.log(this.type + " was born");
 
     }
 //one of three methods that belong to the mammal class
     eat() {
         console.log(this.type + " eats food.");
     }
 
     sleep() {
         console.log(this.type + "sleeps.");
     }
 
     live(years) {
         this.age = this.age + years;
 
         if (this.lifeExpectancy < this.age) {
             console.log(this.type + "is now dead.");
             this.expired = true;
         } else {
             console.log(this.type + " has succesfully lived for an additional" + years + "years.");
         }
     }
 //this method creates a mammal object similar to the "parent" onject.
     reproduce(weightLb, heightInches) {
         console.log(this.type + "created babies");
         let baby = new Mammal(this.type, this.limbs, this.mouth, this.nose, this.eyes, this.tail, this.hair, this.mammary, this.lifeExpectancy, this.heightInches, this.weightLb);
 
         return baby;
     }
 
     die() {
         console.log(this.type + "has lived a full life.");
     }
 }

//class for animal types'
class Animal extends Mammal {
    //the extended class has to be able to provide all the require arguements from the parents constructor.
    constructor(metabolism, expired, type, limbs, mouth, nose, eyes, tail, hair, mammary, life, heightInches, weightLb){
        super(type, limbs, mouth, nose, eyes, tail, hair, mammary, life, heightInches, weightLb);
        this.metabolism = metabolism;
        this.expired = expired;
       
    }
}


//class for fish types that inherits animal properties from methods.
class Fish extends Animal {
    constructor(tasty) {
        super("medium-blooded", "fried"); //activates the parent constructor, fires it.
        this.tasty = tasty;
    }
}

//creating dog
const firstMammal = new Mammal("dog", 4, 1, 1, 2, 1, true, 2, 30, 24, 4);

firstMammal.sleep();
firstMammal.eat();

let secondMammal = firstMammal.reproduce(4, 6);

console.log(secondMammal.heightInches);

console.log(firstMammal, secondMammal);

//Cat Mammal
const catMammal = new Mammal("cat", 4, 1, 1, 2, 1, true, 2, 22, 15, 4);

// array holding the cat babies
let litter = new Array();

litter.push(catMammal.reproduce(1, 2));
litter.push(catMammal.reproduce(2,2,));
litter.push(catMammal.reproduce(1, 3));

litter[1].live(5);

litter[1].live(20);

console.log(litter);

// new fish object
let tilapia = new Fish(true);

console.log(tilapia.metabolism);

const rat = new Animal("warm-blooded",false,"rat", 4, 1, 1, 2, 1, true, 6, 10, 6, 2);

console.log(rat);