function create_updated_collection(collection_a, object_b) {
  var i;
  var collection3=new Array();
  for(i=0;i<collection_a.length-1;){
  var count=0;
  for(var j=i;j<collection_a.length-1;j++){
  if(collection_a[i]==collection_a[j])
  count++;}
  collection3.push({
  key:collection_a[i],
  count:count})
  i+=count;
  }
  collection3.push({
  key:collection_a[i][0],
  count:collection_a[i][2]-'0'})
  for(i=0;i<collection3.length;i++)
  for(j=0;j<object_b.value.length;j++){
  if(collection3[i].key==object_b.value[j]&&collection3[i].count>=3)
  collection3[i].count=collection3[i].count-Math.floor(collection3[i].count/3);
  }
  return collection3;
  //在这里写入代码
}

module.exports = create_updated_collection;
