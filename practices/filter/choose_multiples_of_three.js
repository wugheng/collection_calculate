'use strict';

function choose_multiples_of_three(collection) {
var i,j=0;
var collection1=new Array();
for(i=0;i<collection.length;i++)
{
if(collection[i]%3==0)
{
collection1[j]=collection[i];
j++;}
}
return collection1;
  //在这里写入代码
}

module.exports = choose_multiples_of_three;
