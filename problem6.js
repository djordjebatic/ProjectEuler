function sumSquareDifference(n) {
  var sumsquare = 0;
  var sum = 0;
  for (var x = 1; x <= n ; x++){
    sumsquare = sumsquare + Math.pow(x,2);
    sum = sum + x;
  }
  return Math.pow(sum,2) - sumsquare;
}

sumSquareDifference(100);
