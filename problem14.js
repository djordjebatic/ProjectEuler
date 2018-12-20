// The following iterative sequence is defined for the set of positive integers:
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
// Which starting number, under the given limit, produces the longest chain?
// NOTE: Once the chain starts the terms are allowed to go above one million.

function longestCollatzSequence(limit) {
  var sequenceLength = 0;
  var startingNum = 0;
  var num;
  var cache = [];         //sluzi za cuvanje vrednosti duzine

  for (var i = 0; i<=limit;i++){
    cache[i] = -1;
  }
  cache[1] = 1;

  for (var i = 2; i<= limit; i++){
    var k = 0;
    num = i;
    while(num!=1 && num >=i){
      k++;
      if (num%2===0){
        num = num/2;
      }
      else{
        num = 3*num + 1;
      }
    }

    cache[i] = k + cache[num];
    if (cache[i] > sequenceLength){
      sequenceLength = cache[i];
      startingNum = i;
    }
 }
  return startingNum;
}

console.log(longestCollatzSequence(1000000));
