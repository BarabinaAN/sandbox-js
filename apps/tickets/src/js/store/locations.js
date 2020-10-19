import api from '../service/api-ticket'
import { fotmatDate } from '../helpers/data'

class Locations {
   constructor(api, helpers) {
      this.api = api;
      this.countries = null;
      this.cities = null;
      this.shortCitiesList = {};
      this.lastSearch = {};
      this.airlines = {};
      this.fotmatDate = helpers.fotmatDate;
   }

   async init() {
      const response = await Promise.all([
         this.api.countries(),
         this.api.cities(),
         this.api.airlines(),
      ])

      const [countries, cities, airlines] = response
      this.countries = this.convertCountries(countries);
      this.cities = this.convertCities(cities);
      this.shortCitiesList = this.createShortCitiesList(this.cities);
      this.airlines = this.convertAirlines(airlines);

      return response
   }

   getCityCodeByKey(key) {
      const city = Object.values(this.cities).find(item => item.full_name === key);
      return city.code
   }

   getCityNameByCode(code) {
      return this.cities[code].name
   }

   getAirlineNameByCode(code) {
      return this.airlines[code] ? this.airlines[code].name : '';
   }

   getAirlineLogoByCode(code) {
      return this.airlines[code] ? this.airlines[code].logo : '';
   }

   convertAirlines(airlines) {
      return airlines.reduce((acc, airline) => {
         airline.logo = `http://pics.avs.io/200/200/${airline.code}.png`
         airline.name = airline.name || airline.name_translations.en
         acc[airline.code] = airline

         return acc
      }, {})
   }

   convertCountries(countries) {
      return countries.reduce((acc, country) => {
         acc[country.code] = country
         return acc
      }, {})
   }

   convertCities(cities) {
      return cities.reduce((acc, city) => {
         const country_name = this.countries[city.country_code].name;
         city.name = city.name || city.name_translations.en;
         const full_name = `${city.name}, ${country_name}`;
         acc[city.code] = {
            ...city,
            country_name,
            full_name,
         }

         return acc
      }, {})
   }

   createShortCitiesList(cities) {
      return Object.entries(cities).reduce((acc, [, city]) => {
         acc[city.full_name] = null;
         return acc
      }, {})
   }

   createTicketID(ticket) {
      const id = `${ticket.airline}${ticket.origin}${ticket.expires_at}`
      return id
   }
   
   async fetchTickets(params) {
      const response = await this.api.prices(params)
      this.lastSearch = this.convertTickets(response.data);
   }

   convertTickets(tickets) {
      return Object.values(tickets).map(ticket => {
         return {
            ...ticket,
            ticket_id: this.createTicketID(ticket),
            origin_name: this.getCityNameByCode(ticket.origin),
            destination_name: this.getCityNameByCode(ticket.destination),
            airline_logo: this.getAirlineLogoByCode(ticket.airline),
            airline_name: this.getAirlineNameByCode(ticket.airline),
            departure_at: this.fotmatDate(ticket.departure_at, 'dd MMM yyyy hh:mm'),
            return_at: this.fotmatDate(ticket.return_at, 'dd MMM yyyy hh:mm'),
         }
      })
   }
}

const locations = new Locations(api, {fotmatDate})

export default locations