const isParent = (parent, child) => {
   if (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement)) return;

   let isParent = false;
   let currentParent = child.parentElement;

   while (currentParent) {
      isParent = currentParent === parent
      if (isParent) {
         break;
      }

      currentParent = currentParent.parentElement;
   }

   return isParent;
};


const allLinks = document.querySelectorAll('a')
// get feltered links use custom function
// const filterLinks = [...allLinks].filter(item => !isParent(document.querySelector('ul'), item))

// the same, but use 'closest' function
const filterLinks = [...document.links].filter(item => !item.closest('ul'))

const beforeUl = document.querySelector('ul').previousElementSibling
const afterUl =  document.querySelector('ul').nextElementSibling