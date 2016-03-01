function sumTo (a) {
	var sum = a;
	function sumNext (b){
		sum += b;
		return sumNext
	};
	sumNext.toString = function (){
		console.log(sum);
		return sum
	};
	return sumNext
}
