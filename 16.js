function Table (id) {
	this._base = document.getElementById(id); 
}

Table.prototype.createTable = function(sizeV,sizeH){ 
	this.table = document.createElement('table'); 
	this._base.appendChild(this.table); 
	for(var i = 1; i < sizeV + 1; i++){ 
		this['line_' + i] = document.createElement('tr'); 
		this.table.appendChild(this['line_' + i]); 
		for(var j = 1; j < sizeH + 1; j++){ 
			this['cell_' + j+ '_' + i] = document.createElement('td'); 
			this['line_' + i].appendChild(this['cell_' + j+ '_' + i]); 
			this['cell_' + j+ '_' + i].innerHTML = (function () { 
				var rand = 0 - 0.5 + Math.random() * (100 - 0 + 1) 
				rand = Math.round(rand); 
				return rand; 
			})() 
		} 
	} 
}
