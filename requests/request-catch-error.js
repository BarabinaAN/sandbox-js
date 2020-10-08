// catch errors at example get request

function httpRequest({ method, url } = {}, cb) {
  try {
    const request = new XMLHttpRequest();

    request.open(method, url)
    request.addEventListener('load', () => {
      // error at way: example - '.../user0s'
      if (Math.floor(request.status / 100) !== 2) {
        const msg = `Error, check way. Status request: ${request.status}`
        cb(msg, request)
        return
      }
      const res = JSON.parse(request.responseText)
      cb(null, res)
    })
    // error at adress: example - '...//jsonplaceholder.typicode.c0m/...'
    request.addEventListener('error', () => {
      const msg = `Error, check adress. Status request: ${request.status}`
      cb(msg, request)
    })
    request.send()
  } catch (error) {
    // error at code syntax
    cb(error)
  }
}

// init function
const _url = 'https://jsonplaceholder.typicode.com/users'

httpRequest(
  {
    method: 'get',
    url: _url
  },
  (err, res) => {
    if (err) {
      console.log('Message error:', err);
      console.log('Object error:', res);
      return
    }
    console.log('Success, getting {}:', res);
  }
)