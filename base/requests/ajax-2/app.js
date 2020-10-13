// get users
function getData(fun) {
  const _url = 'https://jsonplaceholder.typicode.com/users'
  const request = new XMLHttpRequest();

  request.open('get', _url)
  request.addEventListener('load', () => {
    if (request.readyState !== 4) return console.error('Error, can not get data')
    const res = JSON.parse(request.responseText)
    fun(res)
  })
  request.send()
}

// send new user
function sendData(body, fun) {
  const _url = 'https://jsonplaceholder.typicode.com/users'
  const request = new XMLHttpRequest();

  request.open('post', _url)
  request.addEventListener('load', () => {
    if (request.readyState !== 4) return console.error('Error, can not get data')
    const res = JSON.parse(request.responseText)
    fun(res)
  })
  request.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
  request.send(JSON.stringify(body))
}

// init function
getData(res => renderUsers(res))


// DOM nodes
const ul = document.querySelector('.user-list')
const form = document.forms[0]
const [...items] = form.querySelectorAll('input')

// variables
let userslenght = 0


// render all users
function renderUsers(users) {
  let li = users.reduce((acc, user) => acc + liTemplate(user), '')
  ul.insertAdjacentHTML('afterbegin', li)
  userslenght = users.length
}

// render one user
function renderUser(user) {
  let li = liTemplate(user)
  ul.insertAdjacentHTML('afterbegin', li)
}

// html temlate 'li' node for one user
function liTemplate({ name, email, website, phone }) {
  return `<li class="list-group-item mb-2">
      <p class="text-success text-uppercase"> ${name} </p>
      <p> <span class="text-info">email:</span> ${email} </p>
      <p> <span class="text-info">website:</span> ${website} </p>
      <p> <span class="text-info">phone:</span> ${phone} </p>
    </li>`
}

// create new user && send {} => service
function createNewUser(arr) {
  let user = { id: ++userslenght }
  let isError = false

  arr.map(({ name, value }) => {
    isError = checkError(name, value)
    user[name] = value
  })

  if (isError) return isError;
  return sendData(user, (res) => renderUser(res))
}

// check field on error
function checkError(name, value) {
  if (!value) {
    const message = `field: "${name}" is empty!!!`
    console.error(message)
    return true
  }
  return false
}

// event 
form.addEventListener('submit', (e) => {
  e.preventDefault()
  createNewUser(items)
})