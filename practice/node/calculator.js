//Renaming ARGV array fro easier reading.
//when using ARGV, start with index 2, because 0 and 1 are not useful in our code.
var terminalArguments = process.argv;


//TESTS if index 2 has something and can be converted to number, otherwise it'll send an error message.
    if (isNaN( parseInt(terminalArguments[2]) ) ) {
    console.log("You are missing two numbers, please type in two numbers afer the commmand with spaces. Example: node calculator.js 50 100");
    
    return;
}
//TESTS if index 3 has something and can be converted to number, otherwise will send error message.
if (isNaN( parseInt(terminalArguments[4]) ) ) {
    console.log("You are missing the second number, please type in two numbers  with an operation name  in between the numbers");
    
    return;
}
//WARNS user that we can only use the first two numbers.
if (terminalArguments[4] != undefined) {
    console.log("Unfortunately this program can only use the first two numbers,subscribe for future updates.");
}

var number1 = parseInt(terminalArguments[2]);
var number2 = parseInt(terminalArguments[4]);
//SAFE to use number1, and number2 as they are Number Datatypes.

//DECIDE what we want to do with these numbers.
if(terminalArguments[3] = undefined){
console.log("You need to type in the operation after the two numbers, try the following values: add, substract, multiply, divide, remainder");

  return;
} else if (terminalArguments[3] == "add"){
    add(number1, number2);
}else if(terminalArguments[3] == "divide"){
    divide(number1, number2);
}else if(terminalArguments[3] == "substract"){
    difference(number1, number2);
}else if(terminalArguments[3] == "multiply"){
    multiply(number1, number2);
}else if(terminalArguments[3] == "remainder"){
    modulate(number1, number2);
} else{
    console.log("Sorry, we did not understand the operator you requested.")
}




function add(num1, num2){
   var sum = num1 + num2;
    console.log(sum);
}

//Create divide, multiply, substract, and leftover functions.

function divide(num1, num2){
    var quotent = num1 / num2;
    console.log(quotent);
}

function substract(num1, num2){
    var difference = num1 - num2;
    console.log(difference);
}
 function multiply(num1, num2){
     var multiply = num1 * num2;
     console.log(multiply);
 }

 function modulate(num1, num2){
    var remainder = num1 % num2;
    console.log(remainder);
 }
