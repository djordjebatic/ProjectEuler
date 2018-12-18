function largestPalindromeProduct(n) {
  
	var result = 0;
	for (var i = Math.pow(10, n)-1; i>= Math.pow(10,n-1) ; i--){
		for (var j = Math.pow(10, n)-1; j>=Math.pow(10,n-1); j--){
			if ( isPalindrome(j*i))
				if (j*i > result)
					result = j*i;
    }
	}

	function isPalindrome(x) {
    var ts = x.toString();
    var n = ts.length;
  
    for(var i = 0 ; i < parseInt(n/2) ; i++){
        if (ts[i] != ts[n-1-i]){
          return false;
        }
    }
    return true;
	}
	return result;
	}

	console.log(largestPalindromeProduct(3));
