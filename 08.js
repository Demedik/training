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

var a = twodArray(5,0,100)
console.table (a)



// Диагональ
function sortArrayDiagFw(array) {
	var arr = [];
	var i;
	for (i = 0; i < array[0].length; i++) {
		arr.push(array[0][i])
	}
	for (i = 1; i < array.length; i++){
		arr.push(array[i][array[i].length - 1])
	}
	for (i = array[0].length - 2; i >= 1; i--) {
		arr.push(array[i][i])
	}
	return arr
}
	
//Диагональ Реверс вариант 1
function sortArrayDiagRev(array) {
	var arr = [];
	var i;
	var j;
	for (i = 0; i < array[array.length - 1].length; i++){
		arr.push(array[array.length - 1][i]);
	}
	for (i = array[array.length - 1].length - 2; i >= 0; i--){
		arr.push(array[i][array[i].length - 1]);
	}
	for (i = array[0].length - 2; i >= 1; i--) {
		j = array.length - 1 - i;
		arr.push(array[j][i]);
	}	
	return arr
}

// Диагональ Реверс вариант 2
function sortArrayDiagRev(array) {
	var arr = [];
	var i;
	var j;
	for (i = 0; i < array[array.length - 1].length; i++){
		arr.push(array[array.length - 1][i]);
	}
	for (i = array[array.length - 1].length - 2; i >= 0; i--){
		arr.push(array[i][array[i].length - 1]);
	}
	for (i = array[0].length - 2,j = 1; i >= 1 && j < array.length - 1; i--, j++) {
		arr.push(array[j][i]);
	}	
	return arr
}

// Фикс
function timeout(){
	var array = []
	for (var i = 1; i < 4; i++) {
	var func = function(i) {
		setTimeout(function () {console.log('I am ' + i + ' iteration')}, 1000 * i)
	}
	array.push(func(i))
}
	for (j = 0; j < 3; j++) {
		array[j]
	}
}
