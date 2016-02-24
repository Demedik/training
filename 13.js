var HorseHell = {
	hellRun: 0
}

function Horse (horseName) {
	var self = this;
	this.stamina;
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
		var n;
		for (n  = mile,this.stamina = 1; n > 0,this.stamina <= 10; n--,this.stamina++ ){
			this.mileage++
			if (this.stamina == 10 && n > 0){
				this.stamina = 0;
				(function (n){setTimeout(function(){console.log("Лошадь отдохнула");return self.run(n)},1000)})
			
			} else if (n == 1) {
				return this.mileage
			}
		}

	}
}

var a = new Horse("Vasya");
a.run(50)

/*this.run = function(mile){
	var n;
	for (n  = mile,stamina = 0;n >= 0,stamina <= 10; n--,stamina++ ){
		this.mileage++
		if (stamina === 10){
			function (){setTimeout(function(){stamina = 0;this.run(n);return "Лошадь отдохнула"},1000)}
		}
	}	
}*/

ДЗ: Модифицируйте конструктор Horse следующим образом: добавьте свойство - усталость. Каждые 1 км пробега добавляет 1 единицу усталости.
 Когда усталость достигает 10 - лошадь должна отдохнуть 1 секунду. Реализуйте это в методе  - отдых, который принимает как параметр функции,
 метод  - который должен выполнятся после отдыха и параметры этого метода. Задача метода выводить сообщение “Лошадь отдыхает”.
 Задержку в 1 секунду реализуйте с помощью функции SetTimeout. После чего должна обнуляться усталость и  выполнятся метод,
 который пришел как параметр функции.
 Например: лошадь должна пробежать 8 км. На текущий момент усталость составляет 4 единицы. Когда лошадь пробежит 6 км - усталость достигнет 10 единиц.
 На этом моменте лошадь должна отдохнуть 1 секунду. Усталость при этом обнулится. И после отдыха лошадь должна добежать оставшиеся 2 км.
