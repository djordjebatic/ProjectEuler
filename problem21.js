function sumAmicableNum(n) {
  
  var sum = 0;

  for (var x = 2; x < n; x++){
    if (x === properDivisorsSum(properDivisorsSum(x)) && x != properDivisorsSum(x)){
      sum += x;
    }
  }

  return sum;

}

function properDivisorsSum(x) {

  var sum = 0;
  for (var i = 1; i <= x/2; i++) {
    if (x % i === 0){
      sum += i;
    }
  }
  return sum;
}

console.log(sumAmicableNum(2000));
