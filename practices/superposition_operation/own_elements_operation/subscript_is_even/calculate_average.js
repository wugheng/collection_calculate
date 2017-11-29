'use strict';
var calculate_average = function(collection){
var arr=[];
for(var i=1;i<collection.length;i+=2)
arr.push(collection[i]);
var result=arr.reduce(function(x,y){return x+y;});
return result/arr.length;
};
module.exports = calculate_average;
