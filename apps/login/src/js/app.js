import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import ui from './config/ui'
import { validate } from './helpers/validate'
import { showInputError, removeInputError } from './views/form'
import { notify, closeNotify } from './views/natifications'
import { login } from './services/login'

const { form, inputEmail, inputPassword } = ui
const fields = [inputEmail, inputPassword]

// events
form.addEventListener('submit', (e) => {
   e.preventDefault();
   onSubmit()
})

fields.forEach(field => field.addEventListener('focus', () => removeInputError(field)))

// hendlers
async function onSubmit() {
   const isValidForm = fields.every(field => {
      const isValid = validate(field)
      if(!isValid) {
         showInputError(field)
      }
      return isValid 
   })
   
   if(!isValidForm) return

   try {
      await login(inputEmail.value, inputPassword.value) 
      form.reset()
      notify({ msg: 'Login success', className: 'alert-success' });
   } catch (error) {
      notify({ mas: 'Login faild', className: 'alert-danger' });
   }
}