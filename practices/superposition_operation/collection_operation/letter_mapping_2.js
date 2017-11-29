'use strict';

function average_to_letter(collection) {
var reducer=function add(sum,item){return sum+item;};
var total=collection.reduce(reducer,0);
var i;
i=total/collection.length;
i=Math.ceil(i);
i=String.fromCharCode(i+96);
return i;
  //在这里写入代码
}

module.exports = average_to_letter;

