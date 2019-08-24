var readlinesync= require('readline-sync');
do
{
var start=readlinesync.question("Press 1 for start");
if(start==1)
{
   var starttime=Date.now();
}
}while(start!=1);

do
{
var stop=readlinesync.question("Press 0 for stop");
if(stop==0)
{
   var stoptime=Date.now();
}
}while(stop!=0);

var elapsed=Number((stoptime-starttime))/1000;
console.log(elapsed);