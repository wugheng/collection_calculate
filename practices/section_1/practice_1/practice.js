function collect_same_elements(collection_a, collection_b) {
var i=0;
var j=0;
var k=0;
var collectionC=new Array();
for(i=0;i<collection_a.length;i++)
for(j=0;j<collection_b.length;j++){
if(collection_a[i]==collection_b[j]){
collectionC[k]=collection_a[i];
k++;
}
}
  return collectionC;
  //在这里写入代码
}

module.exports = collect_same_elements;
