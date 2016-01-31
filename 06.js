var arr = []
var arr_length = 30
function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
}
for (var i = 0; i < arr_length; i++) {
	arr [i] = randomInteger(-20,20)
}


// 1
function equityValues (array) {
	var a;
	var b = "Равные значения не найдены";
	function sortNumbers(a,b) {
		if(a > b) return 1;
		if(a < b) return -1;
	}
	a = array.slice();
	a = a.sort(sortNumbers);
		for (i in array)
		if (a[i] == a[i - 1]) {
			b = "Найдены равные значения";
			break;
		}
	return b
}


// 2
function moreThatOnce (array) {
	var a = [];
	for (i = 0; i < array.length; i++) {
		for (j = i + 1; j < array.length; j++){
			if (array[i] === array[j]) {
				a.push(array[i])
				break;
			}							
		}
	}
	return a
}


// 3
function minus (array) {
	var a = 0
	for (i in array) {
		if (array[i] < 0){
		a++
		}
	}
	return a
}

// 3.1 вывод только минусовых значений.
function minusValues (array){ 
	var a = [] 
	for (i in array) { 
		if (array[i] < 0) { 
		a.push(array[i]) 
		} 
	} 
return a 
}

// 4
function minIndex (array) {
	"use strict"
	var a = []
	function sortNumbers(a,b) {
		if(a > b) return 1;
		if(a < b) return -1;
	}
	a = array.slice()
	a = a.sort(sortNumbers)
	a = a[0]
	a = array.indexOf(a)
	return a

}

// 5
function divSeven (array) {
	var a = 0
	for (i = 0; i < array.length; i++) {
		if (array[i] % 7 == 0) {
		a++
		}
	}
	return a
}

// 6
function match (array1,array2) {
	var a = 0
	for (i = 0; i < array1.length; i++) {
		for (j = 0; j < array2.length; j++) {
			if (array1[i] == array2[j]) {
				a++
			}
		}	
	}	
	return a
}
