function largestProductinaSeries(n) {
var resMax = 0;
var res = 1;
var i = 0;
for (var x = n -1; x < 10001; x++){
  for(var p = x; p>=i;p--){
    res = res*thousandDigits[p];
  }
i++;
if (res > resMax){
  resMax = res;
}
res = 1;
}
return resMax;
}

console.log(largestProductinaSeries(4));
