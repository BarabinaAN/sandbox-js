import currencyUI from './currency'

class TicketsUI {
   constructor(currency) {
      this.container = document.querySelector('.tickets-sections .row');
      this.getCurrencySymbol = currency.getCurrencySymbol.bind(currency)
   }

   renderTickets(tickets) {
      this.clearTickets()

      if (!tickets.length) {
         this.showEmpty
         return
      }

      let fragment = ''
      const symbol = this.getCurrencySymbol()
      tickets.forEach(ticket => {
         const template = TicketsUI.ticketTemplate(ticket, symbol)
         fragment += template
      });

      this.container.insertAdjacentHTML('afterbegin', fragment)
   }

   clearTickets() {
      this.container.innerHTML = ''
   }

   showEmpty() {
      const template = TicketsUI.emptyTemplate()
      this.container.insertAdjacentHTML('afterbegin', template)
   }

   static emptyTemplate() {
      return `<div class="tickets-empty-res-msg">
         По вашему запросу билетов не найдено.
      </div>
     `
   }

   static ticketTemplate(ticket, symbol) {
      const {
         ticket_id,
         airline_logo, 
         airline_name, 
         origin_name, 
         destination_name, 
         departure_at, 
         price, 
         transfers, 
         flight_number
      } = ticket

      return `<div class="col s12 m6">
         <div class="card ticket-card">
            <div class="ticket-airline d-flex align-items-center">
               <img src="${airline_logo}" class="ticket-airline-img">
               <span class="ticket-airline-name">${airline_name}</span>
            </div>
            <div class="ticket-destination d-flex align-items-center">
               <div class="d-flex align-items-center mr-auto">
                  <span class="ticket-city">${origin_name} </span>
                  <i class="medium material-icons">flight_takeoff</i>
               </div>
               <div class="d-flex align-items-center">
                  <i class="medium material-icons">flight_land</i>
                  <span class="ticket-city">${destination_name}</span>
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
            <a 
               class="waves-effect waves-light btn-small green darken-1 add-favorite ml-auto"
               data-ticket-id=${ticket_id}
            >Add to favorites</a>
         </div>
      </div>
   </div>`
   }
}

const ticketsUI = new TicketsUI(currencyUI)

export default ticketsUI