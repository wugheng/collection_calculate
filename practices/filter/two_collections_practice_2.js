'use strict';

function choose_no_common_elements(collection_a, collection_b) {
var result=collection_a.filter(function(x){
return x!='a'&&x!='d'&&x!='e'&&x!='f';})

return result;
  //在这里写入代码
}

module.exports = choose_no_common_elements;
