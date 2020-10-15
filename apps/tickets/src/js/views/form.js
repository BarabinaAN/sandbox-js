import { getAutocompleteInstance, getDatePickerInstance } from '../plugins/materialize'

class FormUI {
   constructor(autocomplete, datepicker) {
      this._form = document.forms['ticketForm'];
      this.origin = document.getElementById('autocomplete-origin')
      this.destination = document.getElementById('autocomplete-destination')
      this.depart = document.getElementById('datepicker-depart')
      this.return = document.getElementById('datepicker-return')

      this.autocompleteOrigin = autocomplete(this.origin)
      this.autocompleteDestination = autocomplete(this.destination)
      this.datepickerDepart = datepicker(this.depart)
      this.datepickerReturn = datepicker(this.return)
   }

   get form() {
      return this._form
   }

   get originValue() {
      return this.origin.value
   }

   get destinationValue() {
      return this.destination.value
   }

   get departValue() {
      return this.datepickerDepart.toString()
   }
   
   get returnValue() {
      return this.datepickerReturn.toString()
   }

   setAutocompleteData(data) {
      this.autocompleteOrigin.updateData(data)
      this.autocompleteDestination.updateData(data)
   }
}

const formUI = new FormUI(getAutocompleteInstance, getDatePickerInstance)

export default formUI