// configuration request
function getUsers(func) {
  const request = new XMLHttpRequest()
  request.open('get', 'https://jsonplaceholder.typicode.com/users')

  request.addEventListener('load', () => {
    const users = JSON.parse(request.responseText)
    func(users)
  })

  request.addEventListener('error', () => {
    console.error('Error of request');
  })
  request.send()
}

// get users
getUsers((users) => {
  renderUsers(users)
})

// get DOM node
const container = document.querySelector('.user-list')

// render list users
function renderUsers(list) {
  const fragment = document.createDocumentFragment()
  const ul = document.createElement('ul')
  ul.classList.add('list-group')

  list.forEach(item => {
    const li = document.createElement('li')
    li.classList.add("list-group-item")
    li.textContent = item.name
    ul.appendChild(li)
  });

  fragment.appendChild(ul)
  container.appendChild(fragment)
}

// render user information
function renderUser(user) {
  const fragment = document.createDocumentFragment()
  const card = document.createElement('div')
  card.classList.add('card', 'mt-5')

  const cardBody = document.createElement('div')
  cardBody.classList.add('card-body')

  const title = document.createElement('h5')
  title.classList.add('card-title')
  title.textContent = user.name
  cardBody.appendChild(title)

  function renderText(obj) {
    const arr = Object.values(obj)
    if (arr.length > 0) {
      arr.forEach(item => {
        const text = document.createElement('p')
        text.classList.add("card-text")
        if (typeof item === 'object') return renderText(item)
        text.textContent = item
        cardBody.appendChild(text)       
      })
    }
  }

  renderText(user)
  card.appendChild(cardBody)
  fragment.appendChild(card)
  container.appendChild(fragment)
}

// event
container.addEventListener('click', (e) => {
  const current = e.target
  const card = document.querySelector('.card')
  if (!current.classList.contains('list-group-item')) return
  if (card) card.remove()
  getUsers((users) => {
    const user = users.filter(item => item.name === current.textContent)[0]
    renderUser(user)
  })
})
