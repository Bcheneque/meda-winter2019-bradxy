var myFirstVariable = 1000;

console.log(myFirstVariable);

//const stands for constant
const someVariable = 1000;

console.log(someVariable);

myFirstVariable += myFirstVariable + 1000;
console.log("added more to myFirstVariable:" + myFirstVariable);

//error below cant change const variable.
//some variable = someVariable + 1000;

console.log("added more to someVariable: " + someVariable);

const pi = 3.14;

const firstName = "bradxy";

//firstName = "Joseph";
//pi = 6.28;

//let lesson
//var prints 20 seconds after because it does not remember its place in the loop.
for (var i = 0; i <20; i ++) {
    setTimeout(function () {
        console.log(i);
    }, 500);
}

for (let i = 0; i <20; i ++) {

    setTimeout(function () {
        console.log(i);
    }, 500); // these are miliseconds.
}