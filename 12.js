function Machine (power) {
	this._machineOn = false; 
	this.enable = function () {
		(this._machineOn === false) ? this._machineOn = true : console.log("Уже включен");
	};
	this.disable = function () {
		(this._machineOn === true) ? this._machineOn = false : console.log("Уже выключен"); 
	};
	this.power = power
}

function CoffieMachine (power) {
	var WATER_HEAT_CAPACITY = 4200;
	var timer, stopTimer;
	Machine.apply(this,arguments);
	var parentDisable = this.disable.bind(this)
	this.disable = function(){
		parentDisable();
		this.stop();
	}
	var getBoilTime = function() {
		return this.waterAmount * WATER_HEAT_CAPACITY * 80 / this.power;
    }.bind(this)
	function onReady() {
		alert( 'Кофе готов!' );
		timer = null;
	}
	this.setWaterAmount = function(amount) {
		this.waterAmount = amount;
	};
	this.waterAmount = 0;
	this.run = function (){
		if (this._machineOn) {stopTimer = setTimeout (onReady,getBoilTime())} else {throw new Error("Кофеварка выключенна")};
	}
	this.stop = function () {
		var a = stopTimer;
		stopTimer = null
		return clearTimeout(a);		
	}
}

function Fridge (power){
	var food = [];
	Machine.apply(this,arguments);
	var parentDisable = this.disable.bind(this)
	this.disable = function(){
		if (food.length === 0){
			parentDisable();
		} else {
			throw new Error("В холодильнике есть еда.")
		}
	}
	this.addFood = function(){
		if(this._machineOn){
			for (i in arguments){
				if (power/100 > food.length){
					food.push(arguments[i])
				} else {
					console.table(food);
					throw new Error("Холодильник переполнен")
				}
			}
		} else {
			throw new Error("Холодильник выключен")
		}
	}
	this.showFood = function(){
		console.table(food);
		return food
	}
	this.getFood = function (){
		var a = food.slice()
		return a
	}
	this.removeFood = function (gF){
		for (i in food){
			if (food[i]["title"] === gF["title"]) {
				return food.splice(i,1)
			}
		}
	}
	this.filterFood = function(item) {
		return food.filter(item);
	};
}
