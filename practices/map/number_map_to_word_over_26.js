'use strict';
var number_map_to_word_over_26 = function(collection){
var result=collection.map(function(item){
if(item<=26)
var i=String.fromCharCode(item+96);
else {
var i=[];
i[0]=String.fromCharCode(97);
i[1]=String.fromCharCode(item+70);
i=i.join("");}
return i;
});
  return result;
};

module.exports = number_map_to_word_over_26;
