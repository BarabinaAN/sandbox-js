import api from './service/api-ticket'

api.countries().then(res => console.log(res))
api.cities().then(res => console.log(res))