import locations from '../store/locations'

class Favorites {
   constructor() {
      this.obj = {};
      this.list = [];
   }

   addItemToFavorite(current) {
      const id = current.dataset.ticketId
      const item = locations.lastSearch.find(el => el.ticket_id === id)
      
      this.obj[id] = item
      localStorage.setItem('favorites', JSON.stringify(this.obj))
   }

   getFavorites() {понятно
      return this.list = Object.values(JSON.parse(localStorage.getItem('favorites')))
   }
}

const favorites = new Favorites()

export default favorites