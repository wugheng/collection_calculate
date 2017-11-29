'use strict';

function double_to_one(collection) {
var result=[];
collection.forEach(function(item){
if(Array.isArray(item))
result=result.concat(double_to_one(item));
else result.push(item);
})
var array;
array=result.filter(function(item,index,self)
{return self.indexOf(item)==index;})
 return array;
  //在这里写入代码
}

module.exports = double_to_one;
