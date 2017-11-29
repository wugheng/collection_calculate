'use strict';

function get_letter_interval(number_a, number_b) {
  var arr=[];
  if(number_a==number_b)
  arr[0]=number_a;
  if(number_a>number_b){
    for(var i=0;i<number_a-number_b+1;i++)
    arr[i]=number_a-i;
  }
  if(number_a<number_b){
  for(var i=0;i<number_b-number_a+1;i++)
    arr[i]=number_a+i;
  }
  var result=arr.map(function(item){
    var i=String.fromCharCode(item+96);
    return i;});
      return result;
  //在这里写入代码
}

module.exports = get_letter_interval;
