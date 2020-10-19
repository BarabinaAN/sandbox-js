import '../css/style.css'
import './plugins/materialize'

import locations from './store/locations'
import favorites from './store/favorites'

import formUI from './views/form'
import currencyUI from './views/currency'
import ticketsUI from './views/tickets'
import favoritesUI from './views/favorites'


document.addEventListener('DOMContentLoaded', () => {
   const form = formUI.form
   const ticketContainer = ticketsUI.container
   const favoriteList = favoritesUI.container
   const favoriteDropBtn = favoritesUI.btnDrop

   initApp();

   // events
   // send form
   form.addEventListener('submit', e => {
      e.preventDefault();
      onFormSubmit()
   })

   // favorite - add item
   ticketContainer.addEventListener('click', e => {
      e.preventDefault();
      if (!e.target.closest('.add-favorite')) return
      favorites.addItemToFavorite(e.target);
   })

   // favorite - show list
   favoriteDropBtn.addEventListener('click', e => {
      e.preventDefault();
      showFavoriteList();
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
      
      ticketsUI.renderTickets(locations.lastSearch)
   }

   // favorites
   function showFavoriteList() {
      if (!favoriteList.classList.contains('favorites-dropdown')) {
         const list = favorites.getFavorites()
         favoriteList.classList.add('favorites-dropdown')
         favoritesUI.renderFavorites(list)
      } else {
         favoriteList.classList.remove('favorites-dropdown')
         favoritesUI.clearFavorites()
      }
   }
})