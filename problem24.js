// The last nine digits can be ordered in 9! = 362880 ways. So the first 362880 permutations start with a 0. 
//The permutations from 362881 to 725760 start with a 1 and then the permutations from 725761 to 1088640 start with a 2. 
//Based on that the millionth permutation must start with a 2. Now we miss 274239 permutation to reach the goal.
//Since 8! = 40320, we get get that changing the number six times we reach the permutations from 241920 – 282240.
//Now it is clear that we need to take the 7th number in the list. The list excludes 2 so we end up with 7 as the second digit of the millionth permutation.

const perm = [0,1,2,3,4,5,6,7,8,9];

function lexiPerm(perm) {
  var N = perm.length;
  var ostatak = 1000000 - 1;
  var ispis = "";

  for(var i = 1; i < N; i++) {
    //number on i-th place
    var j = parseInt(ostatak / factorial(N - i));
    //mod used for getting the next number 
    ostatak = ostatak % factorial(N - i);
    //output
    ispis = ispis + perm[j];
    //removes the number from the row (permutacije bez ponavljanja)
    perm.splice(j,1);
    //did it get to 1000000???
    if (ostatak == 0)
    break;
  }

    //appends the last digits after we break out of the main algorithm
  for (var i = 0; i< perm.length; i++) {
    ispis = ispis + perm[i];
  }

  return ispis;  
}

function factorial(x) {

  var fac = 1;
  for (var i = 1; i <= x; i++) {
    fac *= i;
  }

  return fac;
}

console.log(lexiPerm(perm));
