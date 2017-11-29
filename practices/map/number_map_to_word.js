'use strict';
var number_map_to_word = function(collection){
var result=collection.map(function(item){
var i=String.fromCharCode(item+96);
return i;});
  return result;
};

module.exports = number_map_to_word;
