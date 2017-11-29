'use strict';

function find_last_even(collection) {
var result=[];
for(var i=0;i<collection.length;i++)
if(collection[i]%2==0)
result.push(collection[i]);
var j=result.length;
return result[j-1];
  //在这里写入代码
}

module.exports = find_last_even;
