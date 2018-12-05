var str = "JQuery javascript js";

console.log(str);
var book = {
	name: 'Harry Potter',
	page: 450,
	cover: 'coated',
	costs: function() {
		return 'How much?'
	}
} 
console.log(book.name);
console.log(book.page);
console.log(book.cover);
console.log(book.costs);

for (var i = 1; i <= 20; i++) {
	if (i % 2 == 0) {
		console.log(i);
	};
};
var browser = 'IE';

switch (browser) {
  case 'IE':
    console.log( 'О, да у вас IE!' );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    console.log( 'Да, и эти браузеры мы поддерживаем' );
    break;

  default:
    console.log( 'Мы надеемся, что и в вашем браузере все ок!' );
}
var a = 450;
var page = a > 100 ? 'a больше 100' : 'а меньше либо равен 100';
console.log(page);

 var b = 0;

 while (b < 7) {
 	b++;
 	console.log(b);
 }

var param1 = 2, 
	param2 = 4;
var myFunction = function(callback) {
 	console.log("Число 2 в степени 4");
 	var result = Math.pow(param1,param2);
 	callback(result);
 };
 myFunction(function(result) {
 	console.log("Результат"  +result);
 });