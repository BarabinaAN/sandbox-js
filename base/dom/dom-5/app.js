// Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
const ul = document.querySelector('ul')

const addItem = (selector, count) => {
   if (typeof selector !== 'string' || typeof count !== 'number') return
   const fragment = document.createDocumentFragment()
   const [...li] = document.querySelectorAll(selector)
   let min = li.length
   const max = count + min

   while (min < max) {
      min++
      const item = document.createElement(selector)
      item.classList.add('new-item')
      item.textContent = `item ${min}`
      fragment.appendChild(item)
   }
   ul.appendChild(fragment)
}

addItem('li', 3)
console.log(ul);


// В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку один - strong).
const [...links] = ul.querySelectorAll('a')
links.forEach(item => item.insertAdjacentHTML('beforebegin', '<strong></strong>'))


// В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.
const img = document.createElement('img')
img.setAttribute('src', 'https://cdn.pixabay.com/photo/2017/03/25/15/40/punt-boat-2173781_960_720.jpg')
img.setAttribute('alt', 'man on the boat')
document.body.insertAdjacentElement('beforebegin', img)


// Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
const mark = document.querySelector('mark')
mark.textContent += ' green'
mark.classList.add('green')

// Отсортировать li внутри списка в обратном порядке (по тексту внутри)
const sortItem = () => {
   const [...li] = document.querySelectorAll('li')
   li.sort((prev, next) => {
      return prev.textContent > next.textContent ? -1 : 1
   })
   ul.innerHTML = '';
   li.forEach((item) => ul.appendChild(item));
}
sortItem()

