'use strict';
var even_group_calculate_average = function(collection){
    var arr=[];
    var result=[];
    var temp=0;
    for(var i=1;i<collection.length;i+=2)
    arr.push(collection[i]);
    arr= arr.filter(function (x) {
        return x % 2 !== 1;
    });
    if(arr.length==0)
    result[0]=0;
    else{
    for(var i=0;i<arr.length;i++)
    if(arr[i]>=100)
    temp++;
    if(temp==arr.length){
        var i=arr.reduce(function(x,y){return x+y;});
        i=i/arr.length;
        result[0]=i;
    }
    else {
        var a=arr.filter(function (x) {
            return x <10;
        });
        var b=arr.filter(function (x) {
            return x >=10&&x<100;
        });
        var c=arr.filter(function (x) {
            return x >=100;
        });
    var j=a.reduce(function(x,y){return x+y;});
    result.push(j/a.length);
    j=b.reduce(function(x,y){return x+y;});
    result.push(j/b.length);
    j=c.reduce(function(x,y){return x+y;});
    result.push(j/c.length);
    }
}
    return result;
};
module.exports = even_group_calculate_average;
