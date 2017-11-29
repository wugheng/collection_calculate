'use strict';
function map_to_even(collection){
var result=collection.map(function(item){return 2*item;});
  return result;
}
module.exports = map_to_even;
