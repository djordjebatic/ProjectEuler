// problem iz kombinatorike
// resava se uz pomoc binomnog koeficijenta
// n!/(k!(n-k)!)
// gde je n br pravaca(2N), a n broj mesta (N)
// per Wikipedia:
// A more efficient method to compute individual binomial coefficients is given by the formula: 
// n^k/k! = n(n-1)(n-2)...(n-k+1)/k(k-1)(k-2)...1

    function latticePaths(gridSize) {

    var paths = 1;
   
    for (var i = 0; i < gridSize; i++) {
      paths *= (2 * gridSize) - i;
      paths /= i + 1;
    }
    return paths;
  }
  
  console.log(latticePaths(20));
