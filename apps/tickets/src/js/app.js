import '../css/style.css'
import './plugins/materialize'

import locations from './store/locations'
import formUI from './views/form'

document.addEventListener('DOMContentLoaded', () => {
   initApp();
   const form = formUI.form

   // events
   form.addEventListener('submit', e => {
      e.preventDefault();
      onFormSubmit()
   })

   //
   async function initApp() {
      await locations.init()
      formUI.setAutocompleteData(locations.shortCitiesList)
   }

   async function onFormSubmit() {
      const origin = locations.getCityCodeByKey(formUI.originValue)
      const destination = locations.getCityCodeByKey(formUI.destinationValue)
      const depart_date = formUI.departValue
      const return_date = formUI.returnValue

      console.log(origin, destination, depart_date, return_date);
   }
})