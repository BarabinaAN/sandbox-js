// 1. При наведении на любой из блоков с классом .box все его дочерние элементы должны поменять свой фон на один из списка. 
// ВАЖНО, только дочерние относительно блока на который навели мышь.
// ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];

// 2. Возращаете фон обратно когда пользователь уводит мышку с блока.

// 3. Добавление фона из первой части задания сделать с задержкой в 200мс. Т.е каждый последующий блок должен изменить свой фон за 200мс позже предыдущего. Например если первый блок поменял через 200мс то следующий должен поменять через 400 и т.д.

const box =  document.querySelectorAll('.box')

function setRndColor(el) {
   const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
   const rndColor = colors[Math.floor(Math.random() * colors.length)];
   el.style.background = rndColor;
}

function resetColor(e) {
   e.currentTarget.style.background = '';
}

function setColor(e) {
   let elements = [e.target];
   let current = e.target;

   while (current) {
      elements = [...elements, ...current.children];
      current = current.children[current.children.length - 1];
   }

   elements
      .forEach((el, indx) => setTimeout(
         setRndColor, 200 * (indx + 1), el)
      );
}


box.forEach(item => item.addEventListener('mouseenter', setColor));
box.forEach(item => item.addEventListener('mouseleave', resetColor));