function inputErrorTemplate(msg) {
   return `<div class="invalid-feedback"> ${msg} </div>`
}

export function showInputError(el) {
   const msg = el.dataset.invalidMessage || 'uncorrect input';
   const error = inputErrorTemplate(msg);
   el.classList.add('is-invalid');
   el.insertAdjacentHTML('afterend', error)
}

export function removeInputError(el) {
   const parent = el.parentElement;
   const error = parent.querySelector('.invalid-feedback');
   
   if(!error) return
   el.classList.remove('is-invalid');
   parent.removeChild(error)
}