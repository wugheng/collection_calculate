'use strict';

function grouping_count(collection) {
var number={};
collection.forEach(function(e){
number[e]=number[e]>=1?number[e]+1:1});
return number;
  //在这里写入代码
}

module.exports = grouping_count;
