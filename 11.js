function Calc () {
	
	var a,b;
	this.setNumbers = function (first,second) {
		a = +prompt(first);
		b = +prompt(second)
		return this
	}
	this.sumTo = function () {
		return +a + b
	}
	this.mult = function () {
		return +a * b
	}
	this.showNumbers = function() {
		console.log (a +','+b);
	}
	this.stringCalc = function (calculation){
		var c = JSON.parse(calculation);
		return c
	}
	this.addNewFunc = function (nameFunc,func) {
		this[nameFunc] = func
		return this
	}
}

function Accumulator (){
	var accum = 0
	var lastNumber
	this.sumTo = function (a) {
		accum = accum + a;		
		lastNumber = a;
		return "Саккумулированное значение = " + accum
	}
	this.showLastNumber = function() {
		return "Последние значение = " + lastNumber
	}
	this.showAccumulatedNumber = function (){
		return "Саккумулированное значение = " + accum
	}
}