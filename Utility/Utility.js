var readlineSync = require('readline-sync');
module.exports = { 

windChill(t,v)
{
if((t>50)||((v>120)||(v<3)))
{
var w=35.74+(0.6215*t)+((0.4275*t)-35.75)*Math.pow(v,0.16);
console.log("Windchill is"+w);
}
else
{
    console.log("Wrong values entered");
}
},
ipNumber()
{
 a=readlineSync.question("Enter the value of a");
 return ;
}
,
computeQuadraticRoots(a,b,c)
{
var delta=(b*b)-4*a*c;
var root1=(-b+Math.sqrt(delta))/(2*a);
var root2=(-b-Math.sqrt(delta))/(2*a);

console.log("The roots of quadratic equation are");
console.log(root1,root2);
},
};
