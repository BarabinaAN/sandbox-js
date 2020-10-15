import axios from 'axios'

const _url = 'https://aviasales-api.herokuapp.com';
class ApiTicket {
   constructor(api_url) {
      this.url = api_url
   }

   async countries() {
      try {
         const response = await axios.get(`${this.url}/countries`)
         return response.data
      } catch (error) {
         console.log(error);
         return Promise.reject(error)
      }
   }

   async cities() {
      try {
         const response = await axios.get(`${this.url}/cities`)
         return response.data
      } catch (error) {
         console.log(error);
         return Promise.reject(error)
      }
   }

   async prices(params) {
      try {
         const response = await axios.get(`${this.url}/prices/cheap`, { 
            params,
         })
         return response.data
      } catch (error) {
         console.log(error);
         return Promise.reject(error)
      }
   }
}

const api = new ApiTicket(_url)

export default api
