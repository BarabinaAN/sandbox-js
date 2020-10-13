// Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект,
// содержащий первый аргумент и массив из остатка:

const func = (first, ...other) => ({ first, other })


// Организовать функцию getInfo, которая принимает объект вида
// { name: ..., info: { employees: [...], partners: [ … ] } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:



const organisation = {
   name: 'Google',
   info: {
      employees: ['Vlad', 'Olga'],
      partners: ['Microsoft', 'Facebook', 'Xing']
   }
};

function getInfo({ name = 'Unknown',
   info:
   {
      employees: [...employee],
      partners: [...partner],
   }
}) {
   const str = `
      Name: ${name}
      Employees: ${employee}
      Partners: ${partner}
   `
   return str;
}


// Используя деструктуризацию получить значения из следующих полей
// 1. name,  balance, email
// 2. из массива tags получить первый и последний элемент
// 3. из массива friends получить значение поле name из первого элемента массива
// Если какое то из полей не имеет значения то подставить значение по умолчанию.


let user = {
   "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
   "isActive": false,
   "balance": "$2,474.46",
   "age": 30,
   "eyeColor": "blue",
   "name": "Tameka Maxwell",
   "gender": "female",
   "company": "ENOMEN",
   "email": "tamekamaxwell@enomen.com",
   "phone": "+1 (902) 557-3898",
   "tags": [
      "aliquip",
      "anim",
      "exercitation",
      "non",
   ],
   "friends": [
      {
         "id": 0,
         "name": "Barber Hicks"
      },
      {
         "id": 1,
         "name": "Santana Cruz"
      },
      {
         "id": 2,
         "name": "Leola Cabrera"
      }
   ],
};

const {
   name = 'unknow',
   balance = 0,
   email = 'unknow',
   tags: [first='unknow', , , last='unknow'],
   friends: [{ name: employee='unknow'}]
} = user


// С помощью оператора rest, из объекта user (из предыдущей задачи) скопировать в новый массив значение следующих полей tags и friends.
const [...newTags] = user.tags
const [...newFriends] = user.friends
console.log(newFriends);

