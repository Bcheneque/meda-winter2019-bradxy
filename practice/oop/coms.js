var bradxyLibrary = require ("./library.js");
var secondLibrary = require ("./library2.js");

function runAll(nA, userName){

    var results = bradxyLibrary.mathify(nA[0], nA[1], nA[2], nA[3]);

//var results = bradxyLibrary.mathify(100, 38, 48, 93);
//bradxyLibrary.shouldNotBeAccessed();

console.log(results);}

secondLibrary.greetings("Maurice");
console.log(secondLibrary.author);

module.exports = {
    runAll: runAll
}
