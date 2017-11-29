'use strict';
var map_to_four_multiples_add_one = function(collection){
var result=collection.map(function(item){return (4*item+1);});
  return result;
}

module.exports = map_to_four_multiples_add_one;
