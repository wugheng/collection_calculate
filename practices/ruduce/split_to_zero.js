'use strict';

function spilt_to_zero(number, interval) {
  var result=[];
  for(var i=0;i<Math.ceil(number/interval)+1;i++){
    var j=(number-(i*interval)).toFixed(1);
    result[i]=parseFloat(j);
  }
  return result;
  //在这里写入代码
}

module.exports = spilt_to_zero;
