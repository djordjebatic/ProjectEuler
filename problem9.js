function specialPythagoreanTriplet(n) {
 
	var a = 1;var b = 0;var c = 0;
 
	for(a; a<n/3;a++){
			for (b = a; b < n/2; b++){
					c = n - a - b;
 
					if(a*a + b*b === c*c)
						 return a*c*b;
			}
	}
 }
 
 console.log(specialPythagoreanTriplet(1000));
