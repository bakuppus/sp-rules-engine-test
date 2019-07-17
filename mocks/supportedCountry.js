import { getCountries } from '../api'


export const supportCountry = (params, almanac) => {
  console.log('loading country information')
  return almanac.factValue('code')
    .then((code) => {
      return getCountries()
    })
}