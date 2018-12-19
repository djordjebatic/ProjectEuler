// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

function smallestMult(n) {
  var x = n;
  while(1===1){
  var all = true;

  for (var i = 1; i<=n; i++){
    if (x % i !== 0){
      all = false;
      break;
    }
  }
  if (all) 
    return x;
  x++;
  }
}

console.log(smallestMult(20));
