function primeSummation(n) {
   let sum = 0;
   for (var i = 1; i<n; i++){
       if (isPrime(i)){
        sum+=i;
       }
   }
    return sum;
}

  function isPrime(num){
        if (num == 2) 
            return true;
        if (num < 2 || num % 2 === 0) 
            return false;
        for (var i = 3; i * i <= num; i += 2){//faktor oblika 6k +- 1
            if (num % i === 0) {
                return false;
            }
        }
        return true;
}

console.log(primeSummation(140759));
