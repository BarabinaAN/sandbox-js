// *logic operation
a = 0 || 'string';  // вернет 'string', т.к. логическое или возвращает первый истинный результат, 0 - в логическом представлении false
a = 1 && 'string';  // вернет 'string', т.к. это последнее истинное значение
a = null || 25; // вернет 25, т.к. null в логическом представлении - false
a = null && 25; // вернет null, т.к. оператор && возвращает первый ложный результат
a = null || 0 || 35;  // вернет 35, т.к. null и 0 в логическом представлении - false 
a = null && 0 && 35;  // вернет null, т.к. это первое ложное значение

a = 12 + 14 + '12'  // 2612, сложит первые два числа и "склеит" с последним
a = 3 + 2 - '1' // 4, приведет последнее значение 1 к числу
a = '3' + 2 - 1 // 31, склеит первые два числа "32", приведет к числу и вычтет 1
a = true + 2  // 3, приведет значение true к 1
a = +'10' + 1 // 11, унарный + приведет 10 к числу, затем прибавит 1
a = undefined + 2 // NaN, undefined приводит к NaN
a = null + 5  // 5, null приведет к 0
a = true + undefined  // NaN, true приведет к 1, undefined к NaN

let visible = 'hidden';

if(visible === 'hidden') {
   visible = 'visible';
} else {
   visible = 'hidden';
}

let some = 0;

if(some === 0) {
  some = 1;
} else if (some < 0) {
  some = 'less then zero';
} else {
  some *= 10;
}

let car = {
  name: 'Lexus', 
  age: 10, 
  create: 2008,
  needRepair: false 
}

if (car.age > 5) {
  car.needRepair = true;
  console.log(car.needRepair, 'Need Repair');
}

let item = { 
  name: 'Intel core i7', 
  price: '100$', 
  discount: '15%'
};

let priceToNumber = parseInt(item.price);
let discontToNumber = parseInt(item.discount);

if ( !isNaN(priceToNumber) && !isNaN(discontToNumber) ) {
  let percent = (100 - discontToNumber)/100;
  item.priceWithDiscount = priceToNumber * percent;
  console.log(item.priceWithDiscount);
} else {
  console.log(item.price);
}


let product = {
  name: "Яблоко",
  price: "10$"
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена

let priceToNumber2 = parseInt(product.price)
if ( !isNaN(priceToNumber2) && priceToNumber2 >= min && priceToNumber2 <= max) {
  console.log(product.name);
} else {
  console.log('товаров не найдено.');
}