'use strict';
var calculate_median = function(collection){
var arr=[];
for(var i=1;i<collection.length;i+=2)
arr.push(collection[i]);
var result=arr.sort(function(a,b)
{return a-b;}
);
var lowmiddle=Math.floor((result.length-1)/2);
var highmiddle=Math.ceil((result.length-1)/2);
return (Number(result[lowmiddle])+Number(result[highmiddle]))/2;
};
module.exports = calculate_median;
