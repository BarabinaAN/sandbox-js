import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import ui from './config/ui'
import { validate } from './helpers/validate'
import { showInputError, removeInputError } from './views/form'

const { form, inputEmail, inputPassword } = ui
const fields = [inputEmail, inputPassword]

// events
form.addEventListener('submit', (e) => {
   e.preventDefault();
   onSubmit()
})

fields.forEach(field => field.addEventListener('focus', () => removeInputError(field)))

// hendlers
function onSubmit() {
   const isValidForm = fields.every(field => {
      const isValid = validate(field)
      if(!isValid) {
         showInputError(field)
      }
      return isValid 
   })
   console.log(isValidForm);
}