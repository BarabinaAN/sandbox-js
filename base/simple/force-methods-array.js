// На основе массива сформировать новый, каждый элемент которого содержит информацию о числе и его четности
const arrayNumbers = [1, 2, 3, 5, 8, 9, 10];

const newArrayNumbers = arrayNumbers.map(item => {
   const checkOdd = item % 2;
   return {
      digit: item,
      odd: !!checkOdd
   }
})


//Проверить, содержит ли массив элементы, равные нулю. Если да - вернуть true.
const arrayNumbers2 = [12, 4, 50, 1, 0, 18, 40];
const newArrayNumbers2 = arrayNumbers2.some(item => item === 0 && typeof item === 'number')


// Проверить, все элементы массива имеют длину более 3х символов. Если да - вернуть true

const arrayStr = ['yes', 'hello', 'no', 'easycode', 'what'];
const newArrayStr = arrayStr.every(item => item.length >= 3)

// Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
// Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
// console.log(newArrayStr);

const arrayChar = [
   { char: "a", index: 12 },
   { char: "w", index: 8 },
   { char: "Y", index: 10 },
   { char: "p", index: 3 },
   { char: "p", index: 2 },
   { char: "N", index: 6 },
   { char: " ", index: 5 },
   { char: "y", index: 4 },
   { char: "r", index: 13 },
   { char: "H", index: 0 },
   { char: "e", index: 11 },
   { char: "a", index: 1 },
   { char: " ", index: 9 },
   { char: "!", index: 14 },
   { char: "e", index: 7 }
]

const sortChar = arrayChar.sort((prev, next) => {
   const sortIndx = prev.index > next.index ? 1
                  : prev.index < next.index ? -1
                  : 0
   return sortIndx
})
const charToStr = sortChar.map(item => item.char).join('')


// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): 
const nestedArr = [ 
   [14, 45], 
   [1], 
   ['a', 'c', 'd'] 
];

const sortNestedArr = nestedArr.sort((prev, next) => prev.length - next.length)

// Отсортировать массив по возрастающему количеству ядер (cores).

const parameters = [
   {cpu: 'intel', info: {cores:2, сache: 3}},
   {cpu: 'intel', info: {cores:4, сache: 4}},
   {cpu: 'amd', info: {cores:1, сache: 1}},
   {cpu: 'intel', info: {cores:3, сache: 2}},
   {cpu: 'amd', info: {cores:4, сache: 2}}
]

const sortCores = parameters.sort((prev, next) => {
   const sortArr = prev.info.cores > next.info.cores ? 1 
                  : prev.info.cores < next.info.cores ? -1 
                  : 0
   return sortArr
})

// Создать функцию, которая будет принимать массив продуктов и две цены. 
// Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:
// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]


let products = [
   {title: 'prod1', price: 5.2}, 
   {title: 'prod2', price: 0.18},
   {title: 'prod3', price: 15}, 
   {title: 'prod4', price: 25},
   {title: 'prod5', price: 18.9}, 
   {title: 'prod6', price: 8},
   {title: 'prod7', price: 19}, 
   {title: 'prod8', price: 63}
];

const filterCollection = (arr, from, to) => {
   return arr
         .filter( item => item.price >= from && item.price <= to)
         .sort((prev, next) => prev.price - next.price )
}
console.log(filterCollection(products, 15, 30));





