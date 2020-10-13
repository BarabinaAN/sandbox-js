// Произведение любого количества чисел
function multiply() {
   let res = 0;
   if(arguments.length) {
     res = 1;
     for(let i = 0; i < arguments.length; i++ ) {
       res*=arguments[i];
     }
   }
   return res;
 }
 
 let s = multiply(2, 4, 2);
 let d = multiply();
 
 
 // Возвращает строку-перевертыш
 function reverseString(str) {
   let newStr='';
 
   for (let i = String(str).length-1; i>=0; i--) {
     newStr+=String(str)[i];
   }
   return newStr
 }
 
 reverseString('test');
 reverseString('');
 reverseString(null);
 reverseString(undefined);
 reverseString();
 
 
 //  Возвращает строку в формате юникод, буквы разделены пробелами
 function getCodeStringFromText(str) {
   let charStr = '';
   for(let i=0; i < String(str).length; i++) {
       charStr = charStr + String(str).charCodeAt(i) + ' ';
   } 
   return charStr.trim()
 }
 getCodeStringFromText("hello");
 
 
 // Произвольное число от 1 до 10, проверить на соответствие с введенным
 function guessTheNumber(num) {
 
   if (typeof num !== 'number' || isNaN(num)) {
     return new Error("Please provide a valid number")
   }
   if (num > 0 || num < 10) {
     const rnd = Math.floor(Math.random()*10)
     const res = rnd === +num ? "You win" : `You are lose, your number is ${num}, the random number is ${rnd}`
     return res
   }
 
   return new Error("Please provide number in range 0 - 10")
 }
 
 guessTheNumber(5);