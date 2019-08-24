var readlinesync=require('readline-sync');
var distinct=readlinesync.question("How many Distinct coupons you want???");
var coupons=[];
var count=0;
for(var i=1;i<=distinct;i++)
{
    coupons[i]=Number(i);
}
for(var i=1;i<=distinct;i++)
{
console.log(coupons[i]);
}
var j=1;
var totalcount=0;
for(i=1;i<=distinct;i++)
{
    
while(coupons[j]==getRandomIntInclusive(1,distinct))
{
    totalcount++;
    j++;
}
count++;

}



141
console .log(count);
console.log(totalcount-count);

function getRandomIntIn\lusive(min, max) {14
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }
