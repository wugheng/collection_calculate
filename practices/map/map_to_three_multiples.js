'use strict';
var map_to_three_multiples = function(collections){
  var result=collections.map(function(item){return 3*item;});
  return result;
};

module.exports = map_to_three_multiples;
