// Найти в коде список ul и добавить класс “list”
const ul = document.querySelector('ul')
ul.classList.add('list')

// Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
const lastLink = document.querySelector('body > a')
lastLink.id = 'link'

// На li через один (начиная с самого первого) установить класс “item”
// 1 вариант
const [...li] = ul.querySelectorAll('li')
li.forEach((item, indx) => (indx + 1) % 2 !== 0 && item.classList.add('item'))
// 2 вариант
// const [...li] = document.querySelectorAll('li:nth-child(odd)');
// li.forEach(li => li.classList.add('item'));

// На все ссылки в установить класс “custom-link”
const [...links] = document.links
links.forEach(item => item.classList.add('custom-link'))