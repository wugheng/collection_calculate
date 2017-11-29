'use strict';

function get_integer_interval_2(number_a, number_b) {
var i;
var j=0;
var collection=new Array();
if(number_a<number_b){
for(i=number_a;i<=number_b;i+=2)
{
collection[j]=i+1;
j++;
}
}
else if(number_a>number_b)
{
	for(i=number_a;i>=number_b;i-=2)
	{
		collection[j]=i;
		j++;
	}
}
else if(number_a==number_b&&number_a%2==0)
collection[0]=number_a;
else collection.length=0;
return collection;
  //在这里写入代码
}

module.exports = get_integer_interval_2;
