// 1
function sumTo(n){
	if (n != 1) {
		var a = n + sumTo(n-1);
		return a
	}
	else{
		return n
	}
}

// 2
function sumToCycle(n) {
	var a = 0
	for (i = n; i > 0; i--){
		a = a + i
	}
return a
}

// 3.1
function fuctorial(n){
	var a 
	if (n != 1) {
		a = n * fuctorial(n - 1)
	} else {
		return n
	}
return a
}

// 3.2
function fuctorialCycle (n) {
	var a = 1
	for (i = n; i > 0; i--){
		a = a * i
	}
return a
}
