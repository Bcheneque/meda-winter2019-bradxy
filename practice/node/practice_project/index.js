var _ = require("lodash");

var randomNumber = _.multiply(60, 90);

var jsNumber = Math.floor((Math.random() * 50) + 25);

console.log(randomNumber, jsNumber)

var array1 = [94, 302, 349];
var array2 = [302];

console.log(_.difference(array1, array2));
