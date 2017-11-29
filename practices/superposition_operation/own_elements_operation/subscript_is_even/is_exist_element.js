'use strict';
var is_exist_element = function(collection,element){
    var arr=[];
    var temp=0;
    var pos;
    for(var i=0;i<collection.length;i+=2)
    arr.push(collection[i]);
    for(var j=0;j<arr.length;j++){
        if(arr[j]==element)
        temp++;
    }
    if(temp==1)
    pos=true;
    else pos=false;
    return pos;

};
module.exports = is_exist_element;
