'use strict';

function choose_common_elements(collection_a, collection_b) {

let intersection=collection_a.filter(v=>collection_b.includes(v));
return intersection;
  //在这里写入代码
}

module.exports = choose_common_elements;
