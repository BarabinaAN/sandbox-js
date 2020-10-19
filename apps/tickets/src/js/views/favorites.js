import currencyUI from './currency'

class FavoritesUI {
   constructor(currency) {
      this.container = document.querySelector('.favorites .dropdown-content')
      this.btnDrop = document.querySelector('.dropdown-trigger')  
      this.getCurrencySymbol = currency.getCurrencySymbol.bind(currency)
   }

   renderFavorites(favorites) {
      this.clearFavorites();

      if (!favorites.length) {
         this.showEmpty()
         return
      }

      let fragment = ''

      const symbol = this.getCurrencySymbol()
      favorites.forEach(favorite => {
         const template = FavoritesUI.favoriteTemplate(favorite, symbol)
         fragment += template
      });

      this.container.insertAdjacentHTML('afterbegin', fragment)
   }

   clearFavorites() {
      this.container.innerHTML = ''
   }

   showEmpty() {
      const template = FavoritesUI.emptyTemplate()
      this.container.insertAdjacentHTML('afterbegin', template)
   }

   static emptyTemplate() {
      return `<div class="tickets-empty-res-msg">
         Элементов нет
      </div>
     `
   }

   static favoriteTemplate(item, symbol) {
      const {
         origin_name,
         destination_name,
         departure_at,
         price,
         transfers,
         flight_number
      } = item

      return `<div class="favorite-item  d-flex align-items-start">
         <img src="http://pics.avs.io/200/200/PS.png" class="favorite-item-airline-img" />
         <div class="favorite-item-info d-flex flex-column">
         <div class="favorite-item-destination d-flex align-items-center">
            <div class="d-flex align-items-center mr-auto">
               <span class="favorite-item-city">${origin_name}</span>
               <i class="medium material-icons">flight_takeoff</i>
            </div>
            <div class="d-flex align-items-center">
               <i class="medium material-icons">flight_land</i>
               <span class="favorite-item-city">${destination_name}</span>
            </div>
         </div>
         <div class="ticket-time-price d-flex align-items-center">
            <span class="ticket-time-departure">${departure_at}</span>
            <span class="ticket-price ml-auto">${symbol}${price}</span>
         </div>
         <div class="ticket-additional-info">
            <span class="ticket-transfers">Пересадок: ${transfers}</span>
            <span class="ticket-flight-number">Номер рейса: ${flight_number}</span>
         </div>
         <a class="waves-effect waves-light btn-small pink darken-3 delete-favorite ml-auto">Delete</a>
         </div>
      </div>`
   }
}

const favoritesUI = new FavoritesUI(currencyUI)

export default favoritesUI