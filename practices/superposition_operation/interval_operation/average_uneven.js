'use strict';

function average_uneven(collection) {
var arr=[];
for(var i=0;i<collection.length;i++)
if(collection[i]%2==1)
arr.push(collection[i]);
var sum= arr.reduce(function(x,y){return x+y;});
return sum/arr.length;
  //在这里写入代码
}

module.exports = average_uneven;
