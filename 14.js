function sumTo (a) {
	var sum = a;
	function sumNext (b){
		sum += b;
		return sumNext
	};
	sumNext.valueOf = function (){
		console.log(sum);
		return sum
	};
	sumNext.toString = sumNext.valueOf;
	return sumNext
}
