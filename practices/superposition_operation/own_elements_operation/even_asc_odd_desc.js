'use strict';
var even_asc_odd_desc = function(collection){
    var arr1=[];
    var arr2=[];
    for(var i=0;i<collection.length;i++){
        if(collection[i]%2==0){
        arr1.push(collection[i]);
    }
    else {
        arr2.push(collection[i]);
        
    }
}
arr1=arr1.sort(function(a,b){return a-b;});
arr2=arr2.sort(function(a,b){return b-a;});
   return arr1.concat(arr2); 
};
module.exports = even_asc_odd_desc;
