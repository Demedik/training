var seaFight = {
	setBattlefield: function (length){
		var arr = [];
		for (var i = 0; i < length; i++) {
			arr[i] = [];
			for (var j = 0; j < length; j++) {
				arr[i].push({ship: false, opened: false, msg: "Промазал!"});
			}
		}
		return this.field = arr
	},
	
//	lengthOfBattlefield: function () {
//	return 	'Поле боя равно ' + this.field.length + ' на ' + this.field[0].length + '.'
//	},

	lengthOfBattlefield: function () {
		this.setBattlefield(prompt());
	},
	
	verificationOfValues: function (a,b) {
		return (this.field != undefined && this.field[a] != undefined && this.field[a][b] != undefined) ? true : false			
	},
	
	putShip: function (a,b) {
		if (this.verificationOfValues(a,b)){
			this.field[a][b].ship = true;
			return 'Корабль установлен на '+ a +' по горизонтали и '+ b + ' по вертикали.'	
		} else {
			return 'Введенные координаты не существуют'	
		}
	},
	
	setMsg(a,b,message){
		this.field[a][b].msg = message;
	},
	
	hit: function (a,b){
		if (this.verificationOfValues(a,b)){
			if (this.field[a][b].ship === true){
				this.field[a][b].opened = true;
				this.field[a][b].msg = 'Подбит';
				return 'Корабль подбит по координатам ' + a +','+ b +'.'
			} else {
				this.field[a][b].opened = true;
				return this.field[a][b].msg
			}	
		} else {
			return 'Введенные координаты не существуют'	
		}
	},
	
	hasShips: function(){
		for (var i = 0; i < this.field.length; i++){
			for (var j = 0; j < this.field[i].length; j++){
				if (this.field[i][j].ship === true && this.field[i][j].opened === false){
					return 'У противника остались корабли.'
				} else {
					return 'Все корабли противника уничтожены.'
				}
			}
		}
	}
}
