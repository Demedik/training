function twodArray (length,minі,maxі){
	var arr = [];
	function randomInteger(min, max) {
		var rand = min + Math.random() * (max - min)
		rand = Math.round(rand);
		return rand;
	}
	for (var i = 0; i < length; i++) {
		arr[i] = [];
		for (var j = 0; j < length; j++) {
			arr[i].push(randomInteger(minі,maxі))
		}
	}
	return arr
}

function sortArrayFw(array) {
	var arr = [];
	var i;
	for (i = 0; i < array[0].length; i++) {
		arr.push(array[0][i])
	}
	for (i = 1; i < array.length; i++){
		arr.push(array[i][array[i].length - 1])
	}
	for (i = array[array.length - 1].length - 2; i >= 0; i--){
		arr.push(array[array.length - 1][i])
	}
	for (i = array.length - 2; i >= 1; i--) {
		arr.push(array[i][0])
	}
	return arr
}	

function sortArrayRev(array) {
	var arr = [];
	var i;
	for (i = 0; i < array.length; i++) {
		arr.push(array[i][0])
	}
	for (i = 1; i < array[array.length - 1].length; i++){
		arr.push(array[array.length - 1][i])
	}
	for (i = array.length - 2; i >= 0; i--){
		arr.push(array[i][array[i].length - 1])
	}
	for (i = array[0].length - 2; i >= 1; i--) {
		arr.push(array[0][i])
	}	
	return arr
}

function sortArraySpiralFw(array) {
	var arr = [];
	for (var a = 0; a <= (array.length - 1) / 2; a++) {
		var i
		for (i = 0 + a; i < array[0 + a].length - a; i++) {
			arr.push(array[0 + a][i])
		}
		for (i = 1 + a; i < array[0 + a].length - a; i++){
			arr.push(array[i][array[i].length - 1 - a])
		}
		for (i = array[array.length - 1 - a].length - 2 - a; i >= 0 + a; i--){
			arr.push(array[array.length - 1 - a][i])
		}
		for (i = array[0].length - 2 - a; i >= 1 + a; i--) {
			arr.push(array[i][0 + a])
		}
	}
	return arr
}

function sortArraySpiralRev(array) {
	var arr = [];
	var i;
	for (var a = 0; a <= (array.length - 1) / 2; a++) {
		for (i = 0 + a; i < array.length - a; i++) {
			arr.push(array[i][0 + a])
		}
		for (i = 1 + a; i < array[array.length - 1].length - a; i++){
			arr.push(array[array.length - 1 - a][i])
		}
		for (i = array[array.length - 1].length - 2 -a; i >= 0 + a; i--){
			arr.push(array[i][array[i].length - 1 - a])
		}
		for (i = array[0 + a].length - 2 - a; i >= 1 + a; i--) {
			arr.push(array[0 + a][i])
		}
	}
	return arr
}
