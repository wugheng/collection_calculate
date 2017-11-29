'use strict';

function get_intersection(collection_a, collection_b) {
let intersection=collection_b.filter(v=>collection_a.includes(v));
return intersection;
  //在这里写入代码
}

module.exports = get_intersection;
