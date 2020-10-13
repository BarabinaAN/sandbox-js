//Создайте функцию которая бы умела делать:
const minus = (num = 0) => {
   let val = num;
   return (dec = 0) => val -= dec
}
console.log('minus', minus(10)(6));

// Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:

function multiplyMaker(num = 1) {
   let val = num
   return (num) => val*=num
}

const multiply = multiplyMaker(2);

console.log(
   'второй вызов:', multiply(2), 
   'третий вызов:', multiply(1),
   'четвертый вызов:', multiply(3),
   'пятый вызов:', multiply(10)
);

// Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш

function strManipulation(str) {
   return {
      setStr() {
         str = !isNaN(str) ? String(str) 
               : !str ? ''
               : str
         return str
      },
      getStr() {
         return str
      },
      getStrLength() {
         return str.length
      },
      getStrReverse() {
         return str.split('').reverse().join('')
      }
   }
}

const str = strManipulation('hello world');
console.log(
   'установить: ', str.setStr(),
   'получить: ', str.getStr(),
   'длина: ', str.getStrLength(),
   'обратная строка: ', str.getStrReverse()
);

// Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. 
// Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

function calculate() {
   return {
      setNumber(val=0) { 
         num=Number(val) 
         return this
      },
      plus(val=0) { 
         num+=val 
         return this
      },
      subtract(val=0) {
         num-=val
         return this
      },
      mult(val) {
         num*=val
         return this
      },
      share(val=1) {
         num/=val
         return this
      },
      power(val=1) {
         num^=val
         return this
      },
      getResult() {
         num = num.toFixed(2)
         return num
      }
   }
}

const calcNum = calculate();

console.log(
   'установить: ', calcNum.setNumber(5),
   'прибавить: ', calcNum.plus(1),
   'умножить: ', calcNum.mult(2),
   'узнать: ', calcNum.getResult()
);
console.log(calcNum.setNumber(10).plus(1).mult(2).share(11).getResult());
