'use strict';

function choose_no_repeat_number(collection) {
var result;
result=collection.filter(function(item,index,self)
{return self.indexOf(item)==index;})
 return result; //在这里写入代码
}

module.exports = choose_no_repeat_number;
