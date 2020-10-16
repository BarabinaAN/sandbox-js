import '../css/style.css'
import './plugins/materialize'

import locations from './store/locations'
import formUI from './views/form'
import currencyUI from './views/currency'

document.addEventListener('DOMContentLoaded', () => {
   const form = formUI.form
   initApp();

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
      const currency = currencyUI.currencyValue

      await locations.fetchTickets({
         origin,
         destination,
         depart_date,
         return_date,
         currency,
      })
   }
})