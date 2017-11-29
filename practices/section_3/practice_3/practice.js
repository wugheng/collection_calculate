function create_updated_collection(collection_a, object_b) {
  var i;
  var collectionC=new Array();
  for(i=0;i<collection_a.length;){
  var count=0;
  for(var j=i;j<collection_a.length;j++){
  if(collection_a[i]==collection_a[j])
  count++;}
  collectionC.push({
  key:collection_a[i],
  count:count})
  i+=count;
  }
  for(i=0;i<collectionC.length;i++)
  for(j=0;j<object_b.value.length;j++){
  if(collectionC[i].key==object_b.value[j]&&collectionC[i].count>=3)
  collectionC[i].count=collectionC[i].count-Math.floor(collectionC[i].count/3);
  }
  return collectionC;
  //在这里写入代码
}

module.exports = create_updated_collection;
