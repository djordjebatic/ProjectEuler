function canBeWrittenAsAbudent(n) {
  
  var abudent = [];

  for (var x = 1; x < n; x++){
    if (x < properDivisorsSum(x)){
      abudent.push(x);
    }
  }

  var canBeWritten = [];

  for (var i = 0; i < (abudent.length-1); i++) {
    for (var j = i; j < (abudent.length-1); j++) {
      if (abudent[i] + abudent[j] <= n){
        canBeWritten[abudent[i] + abudent[j]] = true;
      }
      else
        break;
    }
  }

  var sum = 0;

  for (var i = 1; i <= n; i++) {
    if (!canBeWritten[i]){
      sum += i;
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

console.log(canBeWrittenAsAbudent(28123));
