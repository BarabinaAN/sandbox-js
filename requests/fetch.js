const _url = 'https://jsonplaceholder.typicode.com/users'

// simple example create fetch request
fetch(_url)
   .then(res => res.json())
   .then(data => console.log(data))
   .catch(err => console.log(err))


// 3 methods use fetch in project
// 1
function getUser(id = 1) {
   return new Promise((resolve, reject) => {
      fetch(`${_url}/${id}`)
         .then(res => res.json())
         .then(data => resolve(data))
         .catch(err => reject(err))
   })
}

getUser(1).then(user => console.log(user))


// 2
function getUser2(id) {
   // error to console, if incorrect 'id' value
   const [type, num] = id.split('=')
   return fetch(`${_url}/${num}`)
            .then(res => res.json())
}

getUser2('userId=10')
   .then(user => console.log(user))
   .catch(err => console.log(err))


// 3  priority!!!
function getUser3(id) {
   return Promise.resolve().then(() => {
      // at error (incorrect 'id' value) - output text message on console
      const [type, num] = id.split('=')
      return fetch(`${_url}/${num}`)
               .then(res => res.json())
   })
}

getUser3('userId=10')
   .then(user => console.log(user))
   .catch(err => console.log(err))