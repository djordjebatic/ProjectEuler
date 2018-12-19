function nthPrime(n) {
 if (n===1) return 2;
 var i = 1;
 var x = 3;

 while (i < n) {
   if (isPrime(x)){
     i++;
     if (i === n)
     return x;
   }
   x+=2;
 }
}
 function isPrime(x) {
   if (x === 2)
    return true;
   if ( x<2 || x%2 ===0)
    return false;
   for (var i = 3; i*i<=x; i+=2){
     if ( x%i === 0)
      return false
   }
   return true;
 }


console.log(nthPrime(10001));
