	function SeaFight () {
	var setMsg = function (array,a,b,message){
		array[a][b].msg = message;
	};
	var validOfValues = function (array,a,b) {
		 (typeof a === "number" && typeof b === "number" && array != undefined && array[a] != undefined && array[a][b] != undefined) ? true : false			
	};
	this.putShip = function (a,b,orientation,length) {
		if (validOfValues(this.field,a,b)){
			if(orientation === 'horizontal' || orientation === 'h'){
				for (i = 0; i < length; i++){
					this.field[a][b + i].ship = true				
					this.field[a][b + i].lengthOfShip = length;
				};
			} else {
				for (i = 0; i < length; i++){
					this.field[a + i][b].ship = true;
					this.field[a + i][b].lengthOfShip = length;
				
				};
			};
			
			return 'Корабль установлен на '+ a +' по вертикали и '+ b + ' по горизонтали.'	
		} else {
			return 'Введенные координаты не существуют'	
		};
	};
	this.hit = function (a,b){
		if (validOfValues(this.field,a,b)){
			if (this.field[a][b].ship === true){
				this.field[a][b].opened = true;
				this.field[a][b].msg = 'Подбит';
				return 'Корабль подбит по координатам ' + a +','+ b +'.'
			} else {
				this.field[a][b].opened = true;
				return this.field[a][b].msg
			};	
		} else {
			return 'Введенные координаты не существуют'	
		};
	};
}	

SeaFight.prototype.setBattlefield = function (length){
	var arr = [];
	for (var i = 0; i < length; i++) {
		arr[i] = [];
		for (var j = 0; j < length; j++) {
			arr[i].push({ship: false, opened: false, msg: "Промазал!", lengthOfShip: 0});
		};
	};
	return this.field = arr
	};
SeaFight.prototype.lengthOfBattlefield = function () {
	this.setBattlefield(prompt());
};

SeaFight.prototype.hasShips = function(){
	for (var i = 0; i < this.field.length; i++){
		for (var j = 0; j < this.field[i].length; j++){
			if (this.field[i][j].ship === true && this.field[i][j].opened === false){
				return 'У противника остались корабли.'
			} else {
				return 'Все корабли противника уничтожены.'
			};
		};
	};
};
