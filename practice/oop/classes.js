//SAMPLE PERSON OBJECT

let firstPerson = {
    firstName: "Bradxy",
    lastName: "Cheneque",
    age: 35,
    city: "san francisco",
    state: "california",
    occupation: "personal assistant",
    eye: "gray",
    hair: "auburn",

};
let secondPerson = {
    firstName: "Barbara",
    lastName: "Streisand",
    age: 70,
    city:"New York",
};
let thirdPerson = {
    firstPerson:"Brad",
    lastName: "Pit",
    age: 55,
    city:"Los Angeles",
};
//console.log("Hello" + firstPerson.firstName);

//A function that calculates the average age of the people in the array provided.

let people = [firstPerson, secondPerson, thirdPerson];

function getAverageAge(personArray) {

    let totalAge = 0;

    for (let i = 0; i < personArray.length; i++){
        console.log(personArray[i].age);
        totalAge = totalAge + personArray[i].age;
    }

    return totalAge / personArray.lenght;
}
 console.log("The average age of the people in the array is:" + getAverageAge(people));

 //Same Objects but using classes instead.

 class Employee {
     constructor(firstNameValue, salary, license, status, timeSheet){
         console.log("A new employee was created!");
         this.firstName = firstNameValue;
         this.salary = salary;
         this.license = license;
         this.status = status;
         this.timeSheet = timeSheet;
     }
     work() {
         console.log(this.firstName + "is working really hard, for 1 hr.");

         this.timeSheet = this.timeSheet -1;

         console.log(this);
        }
        //GETTER AND SETTER
        //naming convention of getter and setter setVariableName getPropertyName
        getSalary() {
            return this.salary;
        }
        setSalary(newSalary) {
          if (salary > 1000000) {
              console.log("This salary needs additional approval");
              return 1;
          } else {
              this.salary = newSalary;
              return 0;
          }
        }
     //END GETTER AND SETTER

     goHomeAndSleep(){
         console.log(this.firstName + "went home to sleep");
         this.timeSheet = this.originlaTime;
     }

     hoursLeft() {
         return this.timeSheet;
     }
     
 }

 new Employee();

 let firstEmployee = new Employee("Bradxy", 70000, "D41285", "active", 8);
 let secondEmployee = new Employee("Barbara", 120000,"E65327", "inactive", 6);
 let thirdEmployee = new Employee(null, null, null, null, 1);


 console.log(firstEmployee);
 console.log(secondEmployee);
 console.log(thirdEmployee);

 firstEmployee.work();
 secondEmployee.goHomeAndSleep();