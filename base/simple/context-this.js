// Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры:

const rectangle = {
   width: 50,
   height: 20,
   getSquare: function () {
      return this.width * this.height
   }
};

const square1 = rectangle.getSquare();

// Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:

const price = {
   price: 10,
   discount: '15%',
   getPrice,
   getPriceWithDiscount
};

function getPrice() {
   return this.price
}
function getPriceWithDiscount() {
   const percent = (100 - parseInt(this.discount)) / 100
   return this.price * percent
}

price.getPrice(); // 10

price.getPriceWithDiscount(); // 8.5


// Создать объект, у которого будет поле высота и метод “увеличить высоту на один”.
// Метод должен возвращать новую высоту:

const object = {
   height: 10,
   incHeight() {
      return this.height++
   }
}
object.incHeight();

// Создать объект, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:

const numerator = {
   value: 1,
   double: function () {
      this.value *= 2;
      return this
   },
   plusOne: function () {
      this.value++
      return this
   },
   minusOne: function () {
      this.value--
      return this
   },
}

numerator.double().plusOne().plusOne().minusOne();

numerator.value // 3


// Создать объект с розничной ценой и количеством продуктов.
// Объект содержит метод для получения общей стоимости всех товаров (цена * количество продуктов)

const products = {
   coast: 200,
   count: 5,
   getFullCoast
}

function getFullCoast() {
   return this.coast * this.count
}

// Создать второй объект, который описывает количество деталей и цену за одну деталь. 
// Получить общую стоимость всех деталей (нельзя создавать новые функции и методы).
// “Позаимствуйте” метод из предыдущего объекта!

const details = {
   coast: 50,
   count: 4
}

products.getFullCoast.call(details);

// Даны объект и функция:
// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes

let sizes = {
   width: 5,
   height: 10
},

   getSquare = function () {
      return this.width * this.height
   };

getSquare.call(sizes)


// Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.

let element = {
   height: 25,
   getHeight: function () {
      return this.height;
   }
};

let getElementHeight = element.getHeight.bind(element);
getElementHeight();