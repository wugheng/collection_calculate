'use strict';

function compare_collections(collection_a, collection_b) {
if(collection_a.sort().toString()==collection_b.sort().toString())
return true;
else return false;
  //在这里写入代码
}

module.exports = compare_collections;


