'use strict';

function hybrid_operation(collection) {
var result=collection.map(function(item){
return item*3+2;});
 return result.reduce(function(x,y){return x+y;});
  //在这里写入代码
}

module.exports = hybrid_operation;

