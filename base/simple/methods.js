function changeCollection() {
   const res = [];
   for(let i=0; i<arguments.length; i++) {
       const arg = arguments[i];
       if(Array.isArray(arg)){
           arg.shift();
           res.push(arg)
       }
   }
   return res
 }
 
 changeCollection([1,2,3], [5,3,8])
 
 const users = [
   {
     "_id": "5e36b779dc76fe3db02adc32",
     "balance": "$1,955.65",
     "picture": "http://placehold.it/32x32",
     "age": 33,
     "name": "Berg Zimmerman",
     "gender": "male"
   },
   {
     "_id": "5e36b779d117774176f90e0b",
     "balance": "$3,776.14",
     "picture": "http://placehold.it/32x32",
     "age": 37,
     "name": "Deann Winters",
     "gender": "female"
   },
   {
     "_id": "5e36b779daf6e455ec54cf45",
     "balance": "$3,424.84",
     "picture": "http://placehold.it/32x32",
     "age": 36,
     "name": "Kari Waters",
     "gender": "female"
   }
 ]
 
 
 function filterUsers(arr, key, value) { 
   if (!Array.isArray(arr) || !key || typeof key !== 'string' || !value) {
     return new Error('Error mesage')
   }
   const res = [];
 
   for (let i = 0; i < arr.length; i++){
     if(arr[i][key] === value) {
       res.push(arr[i])
     }
   }
   return res
 }
 
 console.log(filterUsers(users, "age", 36));