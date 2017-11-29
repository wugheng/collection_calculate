'use strict';

function even_to_letter(collection) {
var arr=[];
for(var i=0;i<collection.length;i++)
if(collection[i]%2==0)
arr.push(collection[i]);
var result=arr.map(function(item){
var i=String.fromCharCode(item+96);
return i;});
  return result;
  //在这里写入代码
}

module.exports = even_to_letter;
