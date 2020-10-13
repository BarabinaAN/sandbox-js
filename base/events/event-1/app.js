// По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
const btnMsg = document.getElementById('btn-msg')
btnMsg.addEventListener('click', function(e) {
   const attrBtn = this.getAttribute('data-text');
   alert(attrBtn)
})


// При наведении указателя мыши на "btn-msg", кнопка становится красной; 
// когда указатель мыши покидает кнопку, она становится прежнего цвета. 
// Цвет менять можно через добавление класса.
btnMsg.addEventListener('mouseover', function(e) {
   this.style.backgroundColor = 'red'
})
btnMsg.addEventListener('mouseout', function(e) {
   this.style.backgroundColor = ''
})


// При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
document.body.addEventListener('click', function(e) {
   const span = document.getElementById('tag')
   const spanText = span.textContent !== 'Tag:' ? 'Tag:' : span.textContent
   const text = ` ${e.target.nodeName.toLowerCase()}`

   span.textContent = spanText + text
})


// При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д
const btnGenerate = document.getElementById('btn-generate')
btnGenerate.addEventListener('click', function() {
   const ul = document.querySelector('ul')
   const [...li] = document.querySelectorAll('li')
   const newItem = document.createElement('li')
   newItem.textContent = `Item ${li.length+1}`
   ul.appendChild(newItem)
})