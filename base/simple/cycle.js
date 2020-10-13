// первые буквы каждого слова должны быть в верхнем регистре. Использовать for или while.
let str = 'i am in the easycode';
let i = 0;
let newStr = '';

while (i < str.length) { 
  if (str[i-1] === ' ' || i === 0) {
    newStr+=str[i].toUpperCase()
  } else {
    newStr+=str[i]
  }
  i++
}
console.log(newStr);

// Сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let str2 = 'tseb eht ma i';
let newStr2 = '';

for (let i=str2.length-1; i >= 0; i--) {
  newStr2+=str2[i];
}
console.log(newStr2);



// Факториал числа 10. Использовать for.

let num = 10;
let fct = 1;

for (let i = 1; i <= num; i++) {
  fct*=i
}
console.log(fct);


// каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
let str3 = 'JavaScript is a pretty good language';
let newStr3 = '';

for (let i=0; i < str3.length; i++) {
  if (str3[i-1] === ' ' || i === 0) {
    newStr3+=str3[i].toUpperCase();
  } else if (str3[i] === ' ') {
    continue
  } else {
    newStr3+=str3[i];
  }
}
console.log(newStr3);


// Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Использовать for of.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
 
for (value of arr) {
  if (value % 2) {
    console.log(value);
  }
}

// Перебрать объект, если значение свойства - строка, переписать ее в верхнем регистре. Использовать for in.

let list = {
  name: 'denis',
  work: 'easycode',
  age: 29
}

for (key in list) {
  if (typeof list[key] === 'string') {
    list[key] = list[key].toUpperCase()
  }
}
console.log(list);

