var a = 10;
var b = 30;
var c = 20;
var arr = new Array (3)

if (a > b && b > c) { 
arr [0] = a * 10;
arr [1] = b * 5;
arr [2] = c;
}
else if (a > c && c > b) {
arr [0] = a * 10;
arr [1] = b;
arr [2] = c * 5;
}
else if (b > a && a > c) {
arr [0] = a * 5;
arr [1] = b * 10;
arr [2] = c;
}
else if (b > c && c > a) {
arr [0] = a;
arr [1] = b * 10;
arr [2] = c * 5;
}
else if (c > b && b > a) {
arr [0] = a;
arr [1] = b * 5;
arr [2] = c * 10;
} 
else if (c > a && a > b) {
arr [0] = a * 5;
arr [1] = b;
arr [2] = c * 10;
}
console.info(
'Значение "a" = ' + a  + ' . ','Модифицированое значение "a" = ' + arr [0] + ' . ',
'Значение "b" = ' + b  + ' . ','Модифицированое значение "b" = ' + arr [1] + ' . ',
'Значение "c" = ' + c  + ' . ','Модифицированое значение "c" = ' + arr [2] + ' . ');
// Добавил описание значений для более лучшей читаемости.