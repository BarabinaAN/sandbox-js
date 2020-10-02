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

getData(res => {
  renderUsers(res)
})

// 1. get data
// 2. render data to page
// 3. create function add new user on the page

const userList = document.querySelector('.user-list')

function renderUsers(users) {
  let li = users.reduce((acc, user) => acc + liTemplate(user), '')
  const ul = ulTemplate(li)
  userList.appendChild(ul)
}

function ulTemplate(li) {
  const fragment = document.createDocumentFragment()
  const ul = document.createElement('ul')
  ul.classList.add('list-group')
  ul.insertAdjacentHTML('afterbegin', li)
  fragment.appendChild(ul)
  return fragment
}

function liTemplate({ name, email, website, phone }) {
  return `<li class="list-group-item mb-2">
      <p class="text-success text-uppercase"> ${name} </p>
      <p> <span class="text-info">email:</span> ${email} </p>
      <p> <span class="text-info">website:</span> ${website} </p>
      <p> <span class="text-info">phone:</span> ${phone} </p>
    </li>`
}