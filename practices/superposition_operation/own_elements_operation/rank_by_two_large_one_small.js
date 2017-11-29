'use strict';
function rank_by_two_large_one_small(collection){
  collection=collection.sort(function(a,b){return a-b;});
  for(var i=0;i<collection.length;i+=3)
  {
    var j=i;
    if(j+2<collection.length)
  {
    var temp;
    temp=collection[j];
    collection[j]=collection[j+1];
    collection[j+1]=collection[j+2];
    collection[j+2]=temp;
  }
  else break;
  }
  return collection;
  //这里写代码。。。
}
module.exports = rank_by_two_large_one_small;
