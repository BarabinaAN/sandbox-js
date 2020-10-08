   
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

// use promise get data the chain
function getPost(id=1) {
   return new Promise((resolve, reject) => {
      myHttp.get(`${_urlPosts}/${id}`,
         (err, res) => {
            if (err) reject(err)
            resolve(res)
         }
      )
   })
}

function getPostComments(post) {
   return new Promise((resolve, reject) => {
      myHttp.get(`${_urlPostComment}1`,
         (err, res) => {
            if (err) reject(err)
            resolve({ post, comments: res})
         }
      )
   })
}

function getUser(data) {
   return new Promise((resolve, reject) => {
      myHttp.get(`${_urlUser}1`,
         (err, res) => {
            if (err) reject(err)
            resolve({ ...data, user: res})
         }
      )
   })
}

// get data with { post: ..., comment: ..., user: ...}
getPost()
   .then(post => getPostComments(post))
   .then(comment => getUser(comment))
   .then(user => console.log(user))
   .catch(err => console.log(err))



  
// use method Promise.all([])
function getPost2(id=1) {
   return new Promise((resolve, reject) => {
      myHttp.get(`${_urlPosts}/${id}`,
         (err, res) => {
            if (err) reject(err)
            resolve(res)
         }
      )
   })
}

function getPostComments2(id=1) {
   return new Promise((resolve, reject) => {
      myHttp.get(`${_urlPostComment}${id}`,
         (err, res) => {
            if (err) reject(err)
            resolve(res)
         }
      )
   })
}

function getUser2(id=1) {
   return new Promise((resolve, reject) => {
      myHttp.get(`${_urlUser}${id}`,
         (err, res) => {
            if (err) reject(err)
            resolve(res)
         }
      )
   })
}

// get data with []
Promise.all([
   getPost2(),
   getPostComments2(),
   getUser2()
])
   .then(data => console.log(data))
   .catch(err => console.log(err))