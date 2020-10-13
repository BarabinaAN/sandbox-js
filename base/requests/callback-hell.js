   
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

// init request
const myHttp = http()
const _urlPosts = 'https://jsonplaceholder.typicode.com/posts/'
const _urlPostComment = 'https://jsonplaceholder.typicode.com/comments?postId='
const _urlUser = 'https://jsonplaceholder.typicode.com/users/'

// callback hell example
// bad way, cus it is necessary to transfer the status down the chain!!!
myHttp.get(
   `${_urlPosts}1`,
   (err, res) => {
      if (err) return console.log('error posts', err);
      myHttp.get(
         `${_urlPostComment}1`,
         (err, res) => {
            if (err) return console.log('error post item', err);
            myHttp.get(
               `${_urlUser}1`,
               (err, res) => {
                  if (err) return console.log('error user', err);
                  console.log('success', res);
               }
            )
         }
      )
   }
)