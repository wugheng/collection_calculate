'use strict';
var single_element = function(collection){
    var arr=[];
    var temp;
    for(var i=1;i<collection.length;i+=2)
    arr.push(collection[i]);
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
            arr[j]='#';
            temp=i;
            }
        }
        arr[temp]='#';
    }
    var result=[];
    result=arr.filter(function(n){
        var flag;
        if(n=='#')
        flag=false;
        else flag=true;
        return flag;
    });
return result;
};
module.exports = single_element;
