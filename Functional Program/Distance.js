var readlinesync=require('readline-sync');
var x=parseInt(process.argv[2]);
var y=parseInt(process.argv[3]);
function computeDistance(x,y)
{
var d=(x*x)+(y*y);
var distance=Math.sqrt(d);
console.log("Euclidean Distance is "+distance);
}
computeDistance(x,y);