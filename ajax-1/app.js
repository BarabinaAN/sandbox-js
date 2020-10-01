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

getUsers((users) => {
  renderUsers(users)
})

const container = document.querySelector('.user-list')

function renderUsers(list) {

}