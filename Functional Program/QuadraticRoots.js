var readlineSync = require('readline-sync');
var a=readlineSync.question("Enter the value of a");
var b=readlineSync.question("Enter the value of b");
var c=readlineSync.question("Enter the value of c");
var delta=(b*b)-4*a*c;
var root1=(-b+Math.sqrt(delta))/(2*a);
var root2=(-b-Math.sqrt(delta))/(2*a);

console.log("The roots of quadratic equation are");
console.log(root1,root2);