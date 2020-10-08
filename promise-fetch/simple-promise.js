// 1 way init promise
// const promise = new Promise((resolve, reject) => {
//    // setTimeout(() => resolve(Math.random()), 2000)
//    setTimeout(() => reject('error'), 1000)
// })

// 2 way init promise
function getData() {
   return new Promise((resolve, reject) => {
      setTimeout(() => resolve(Math.random()), 2000)
      // setTimeout(() => reject('error'), 1000)
   })
}


// To use - "promise" or "getData()"
getData()
   .then(x => x) // return result!!!
   .then(y => console.log(y))
   .catch(error => console.log(error))