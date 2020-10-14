import api from '../service/api-ticket'

class Locations {
   constructor(api) {
      this.api = api;
      this.countries = null;
      this.cities = null;
   }

   async init() {
      const response = await Promise.all([
         this.api.countries(),
         this.api.cities(),
      ])

      const [countries, cities] = response
      this.countries = countries;
      this.cities = cities;

      console.log(response);
      return response
   }

   getCitiesByCode(code) {
      return this.cities.filter(city => city.country_code === code)
   }
}

const locations = new Locations(api)

export default locations