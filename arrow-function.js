// Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):
// что такое метод reduce можно прочитать https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const sum = (...params) => {
   if (!params.length) return 0;

   return params.reduce((prev, next) => prev + next);
}
sum(1, 2, 3, 4); // 10
sum(); // 0


// Переделать функцию с использованием функции-стрелки

const convertToObject = (num) => ({
   value: num,
   isOdd: Boolean(num % 2)
})