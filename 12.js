function Machine (power) {
	this._machineOn = false; 
	this.enable = function () {
		(this._machineOn === false) ? this._machineOn = true : console.log("Уже включена");
	};
	this.disable = function () {
		(this._machineOn === true) ? this._machineOn = false : console.log("Уже выключена"); 
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
	var food = []
	Machine.apply(this,arguments);
	this.addFood = function(){
		if(this._machineOn){
			for (i in arguments){
				if (power/100 > food.length){
					//for (j in food){
						//if (food[j]["title"] === arguments[i]["title"]){
						//	food[j]["value"] = food[j]["value"] + arguments[i]["value"];
						//	break
						//	}
						//	else if (j == food.length - 1){
							food.push(arguments[i])
						//}
					//}	
				} else {
					console.table(food);
					throw new Error("Холодильник переполнен")
				}
			}
		} else {
			throw new Error("Холодильник выключен")
		}
	}
	this.removeFood = function (gF){
		for (i in food){
			if (food[i]["title"] === gF["title"]) {
				return food.splice(i,1)
			}
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
}

var a = new Fridge(1000)
a.enable()
a.addFood({title:"Молоко",calories:90,value: 3},{title:"Суп",calories:100,value: 5},{title:"Колбаса",calories:1000,value: 6},{title"Хлопья",calories:50,value: 1})
/*var b = a.getFood()
b.push({title:"ложка",calories:0},{title:"вилка",calories:0})
a.showFood()
console.table(b)
var c = new Fridge(200)
c.addFood({title:"кашка",calories:90},{title:"малашка",calories:100})*/

