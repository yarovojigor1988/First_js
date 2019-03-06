let a = 0 || 'string';
'string' - False ИЛИ True

let a = 1 && 'string';
'string' - True И True

let a = null || 25;
25 - False ИЛИ True;

let a = null && 25;
null - False И True;

let a = null || 0 || 35;
35 - False ИЛИ False ИЛИ True;

let a = null && 0 && 35;
null - False И False И False; прерывается на первом сравнении.

12 + 14 + '12'
2612 - 12 + 14 = 26 - сложение чисел
26 + '12' = '2612' - число + строка = строка

3 + 2 - '1' = 4
3 + 2 = 5 - сложение чисел
5 - '1' = 4 - строка '1' преобразуется в число 1 при арифметической операции вычитания.

true + 2 = 3 - true проеобразуется в число 1

+'10' + 1 = 11 унитарный оператор + и строка '10' преобразуется в число 10, 10 + 1 = 11

undefined + 2 = NaN - undefined преобразуется в NaN, NaN + 2 = NaN

null + 5 = 5 - null преобразуется в 0

true + undefined = NaN, true преобразуется в 1, undefined преобразуется в NaN, 1 + NaN = NaN

//

//1
let a = "invisible";
if(a === "hidden") {
	a = "visible";
} else {
	a = "hidden";
}

//2
let a = 34;
if(a === 0) {
	a = 1;
} else if(a < 0){
	a = `less then zero`;
} else if(a > 0){
	a = a * 10;
}

//3
let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };
if (car.age > 5) {
	console.log('Need Repair');
	car.needRepair = true;
}

//4
let item = { name: 'Intel core i7', price: '100$', discount: '15%' };
if (Boolean(item.discount) == true) {
	item.priceWithDiscount = parseFloat(item.price) * (100 - parseFloat(item.discount))/100;
	console.log(`цена с учетом скидки ${item.priceWithDiscount}$`);
} else {
	console.log(item.price);
}

//5
let product = { name: "Яблоко", price: "10$" };

let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (parseFloat(product.price) >= min && parseFloat(product.price) <= max) {
	console.log(product.name);
} else {
	console.log("товаров не найдено");
}