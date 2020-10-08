// uneversal function
function http() {
  return {
    // method get
    get(url, cb) {
      try {
        const request = new XMLHttpRequest();

        request.open('get', url)
        request.addEventListener('load', () => {
          if (Math.floor(request.status / 100) !== 2) {
            const msg = `Error, check way. Status request: ${request.status}`
            cb(msg, request)
            return
          }
          const res = JSON.parse(request.responseText)
          cb(null, res)
        })
        request.addEventListener('error', () => {
          const msg = `Error, check adress. Status request: ${request.status}`
          cb(msg, request)
        })
        request.send()
      } catch (error) {
        cb(error)
      }
    },
    // method post
    post(body, headers, url, cb) {
      try {
        const request = new XMLHttpRequest();

        request.open('post', url)
        request.addEventListener('load', () => {
          if (Math.floor(request.status / 100) !== 2) {
            const msg = `Error, check way. Status request: ${request.status}`
            cb(msg, request)
            return
          }
          const res = JSON.parse(request.responseText)
          cb(null, res)
        })
        request.addEventListener('error', () => {
          const msg = `Error, check adress. Status request: ${request.status}`
          cb(msg, request)
        })

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            request.setRequestHeader(key, value)
          });
        }

        request.send(JSON.stringify(body))
      } catch (error) {
        cb(error)
      }
    }
  }
}

// init function
const service = http()
const _urlPost = 'https://jsonplaceholder.typicode.com/posts'
const newPost = {
  id: 1,
  title: '...',
  body: '...',
  userId: 1
}
const headersPost = {
  'Content-type': 'application/json; charset=UTF-8'
}

service.post(newPost, headersPost, _urlPost,
  (err, res) => {
    if (err) {
      console.log('Message error:', err);
      console.log('Object error:', res);
      return
    }
    console.log('Success, getting {} whith new item:', res);
  }
)