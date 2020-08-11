function makeMultiplier(multiplier){
	var myfunc=function(x){
		return multiplier*x;
	};
	return myfunc;
}

var multiply=makeMultiplier(5);
console.log(multiply(15));
