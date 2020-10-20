const regExpDic = {
   email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
   password: /^[0-a-zA-Z]{4,}$/
}

export function validate(el) {
   const regExpName = el.dataset.required
   if(!regExpDic[regExpName]) return true
   return regExpDic[regExpName].test(el.value)
}