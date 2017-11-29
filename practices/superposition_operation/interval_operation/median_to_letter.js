'use strict';

function median_to_letter(collection) {
var arr=collection.sort(function(a,b)
{return a-b;}
); 
var lowmiddle=Math.floor((arr.length-1)/2);
var highmiddle=Math.ceil((arr.length-1)/2);
var i= (Number(arr[lowmiddle])+Number(arr[highmiddle]))/2;
i=Math.ceil(i);
var arr1=[];
arr1[0]=String.fromCharCode(97);
arr1[1]=String.fromCharCode(i-26+96);
arr1=arr1.join("");
return arr1;

  //在这里写入代码
}

module.exports = median_to_letter;
