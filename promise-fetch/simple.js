// get users
function getData(fun) {
  const _url = 'https://jsonplaceholder.typicode.com/users'
  const request = new XMLHttpRequest();

  request.open('get', _url)
  request.addEventListener('load', () => {
    // error at way: example - '.../user0s'
    if (request.readyState !== 4) return console.error('Error, can not get data')
    const res = JSON.parse(request.responseText)
    fun(res)
  })
  // error at adress: example - '...//jsonplaceholder.typicode.c0m/...'
  request.addEventListener('error', () => {
    fun(error, res)
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
  request.addEventListener('error', () => {
    fun(error, res)
  })
  request.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
  request.send(JSON.stringify(body))
}

// init function
getData(res => renderUsers(res))

// render all users
function renderUsers(users) {
  console.log(users);
}