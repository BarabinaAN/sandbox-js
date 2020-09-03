// *numbers manipulation
let pi = +Math.PI.toFixed(2);
let maxValue = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
let rndA = +(Math.random()*10).toFixed(2);
let num = 5;
let rndB = Math.floor(Math.random()*num+1);
let sum = (0.6*10+0.7*10)/10;
let strToNum = parseInt('100$');


// *strings manipulation
let string = "some test string";

// get string length
let stringLength = string.length - 1;

// get first and last char
let firstChar = string[0];
let lastChar = string[stringLength];

// to uppercase
let firstCharToUp = firstChar.toUpperCase();
let lastCharToUp = lastChar.toUpperCase();

// get char position
let firstSpaceChar = string.indexOf(' ');
let substringPosition = string.indexOf('string');
    substringPosition = string.indexOf(' ', firstSpaceChar + 1);

// get substring
let substring = string.substr(5, 4);
    substring = string.slice(5, 10);
    substring = string.slice(0, -6);

// to string
let a = 20,
    b = 16;

let str = `${a}${b}`;


// objects manipulation
let obj = {
  product: 'iphone'
};

obj.price = 1000;
obj.currency = 'dollar';

obj.details = {
  model: null,
  color: null
};

console.log(obj);
