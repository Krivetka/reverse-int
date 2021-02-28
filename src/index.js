module.exports = function reverse (n) {
  n=n+'';
  arr=n.split("");
  a='';
  for(i=arr.length-1; i>=0; i--){
    a+=arr[i]+''; 
  }
  return Number.parseInt(a);
}
