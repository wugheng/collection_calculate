'use strict';

function hybrid_operation_to_uneven(collection) {
var arr=[];
for(var i=0;i<collection.length;i++)
if(collection[i]%2==1)
arr.push(collection[i]);
var result=arr.map(function(item){
return item*3+5;});
return result.reduce(function(x,y){return x+y;});
  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;

