'use strict';

function choose_divisible_integer(collection_a, collection_b) {
var result=collection_a.filter(function(x){
var flag=false;
for(var i=0;i<collection_b.length;i++)
if(x%collection_b[i]==0)
flag=true;
return flag;});
return result;
  //在这里写入代码
}

module.exports = choose_divisible_integer;
