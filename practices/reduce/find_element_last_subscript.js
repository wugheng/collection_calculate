'use strict';

function calculate_elements_sum(collection, element) {
var result=[];
var pos=0;
while(pos<collection.length){
pos=collection.indexOf(element,pos);
if(pos===-1)
break;
result.push(pos);
pos+=1;}
var i=result.length;
return result[i-1];
  //在这里写入代码
}

module.exports = calculate_elements_sum;
