'use strict';

function get_integer_interval(number_a, number_b) {
var i;
var j;
var collection=new Array();
if(number_a<number_b){
for(i=number_a,j=0;i<=number_b;i++)
{
collection[j]=i;
j++;
}
}
else if(number_a>number_b)
{
	for(i=number_a,j=0;i>=number_b;i--)
	{
		collection[j]=i;
		j++;
	}
}
else
collection[0]=number_a;
return collection;
  //在这里写入代码
}

module.exports = get_integer_interval;

