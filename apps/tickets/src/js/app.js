import locations from './store/locations'

locations.init().then(res => {
   console.log(res)
   console.log(locations)
   const citiesPE = locations.getCitiesByCode('PE')
   console.log(citiesPE);
})