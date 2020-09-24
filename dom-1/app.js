const head = document.head
const body = document.body
const children = body.children 
const firstElementChildren  = body.firstElementChild.children
const notFirstOrLastChildren = [...children].filter((i, indx) => indx!==0 && indx!==[...children].length-1)

console.log(head);
console.log(body);
console.log(children);
console.log(firstElementChildren);
console.log(notFirstOrLastChildren);