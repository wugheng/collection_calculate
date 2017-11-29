'use strict';

function compute_chain_median(collection) {
var arr=collection.split('->').sort(function(a,b)
{return a-b;}
);
var lowmiddle=Math.floor((arr.length-1)/2);
var highmiddle=Math.ceil((arr.length-1)/2);
return (Number(arr[lowmiddle])+Number(arr[highmiddle]))/2;
  //在这里写入代码
}

module.exports = compute_chain_median;
