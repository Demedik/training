var HorseHell = {
	hellRun: 0
}

function Horse (horseName) {
	var self = this;
	this.stamina = 0;
	this.__proto__ = HorseHell;
	this.mileage = 0
	this.horseName = horseName
/*	this.run = function (n){
		if (this.mileage === null){
			this.mileage = 0;
			this.mileage += n;
			this.__proto__hellRun += n;
			return "Воскресили и пнули на " + n + " километров."
		}
		else if(this.mileage < 1000){
		this.__proto__.hellRun += n;
		return this.mileage += n
		} else {
		this.__proto__.hellRun -= this.mileage;
		this.mileage = null;
		return "Застрелилась"
		}
	}*/
	this.run = function(mile){
		if (typeof mile != "number" || mile < 0){
			throw new Error("Введите другое значение")
		}
		for (mile,this.stamina;mile >= 0,this.stamina < 10; mile--,this.stamina++){
			if (this.stamina == 9 && mile > 0){
				(function (){setTimeout(function(){console.log("Лошадь отдохнула, осталось бежать "+ mile +" км.");self.stamina = 0;self.run(mile)},1000)})()
			} else if (mile == 0) {
				return console.log ("Общий пробег составил " + this.mileage + " км.")
			}
			this.mileage++
		}	
	}
}
