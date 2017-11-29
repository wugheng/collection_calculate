function collect_same_elements(collection_a, object_b) {
  var i;
  var j;
  var k=0;
  var collectionC=new Array();
  for(i=0;i<collection_a.length;i++)
  for(j=0;j<object_b.value.length;j++){
  if(collection_a[i]==object_b.value[j]){
  collectionC[k]=collection_a[i];
  k++;}
  }
    return collectionC;
  //在这里写入代码
}

module.exports = collect_same_elements;
