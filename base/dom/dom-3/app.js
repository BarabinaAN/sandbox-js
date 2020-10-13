// Найти параграф и получить его текстовое содержимое (только текст!)

const p = document.querySelector('p')
const text = p.textContent

// Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

const getNodeInfo = (node) => {
   if (!(node instanceof HTMLElement)) return
   const children = node.children
   return {
      type: node.nodeType,
      name: node.nodeName,
      length: children.length,
   }
}
const ul = document.querySelector('ul')
const nodeInfo = getNodeInfo(ul);
console.log(nodeInfo);

// Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

const getLinksText = (node) => {
   let links = node.querySelectorAll('a');
   return [...links].map(item => item.textContent);
}

const linksText = getLinksText(ul);
console.log(linksText);

// В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

const changeChildrenText = (node) => {
   if(!(node instanceof HTMLElement)) return
   [...node.childNodes].forEach(item => item.nodeType === 3 ? item.textContent = '-text-' : null );

   return node
}

const childrenText = changeChildrenText(p)
console.log(childrenText);