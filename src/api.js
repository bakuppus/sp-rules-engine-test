import fetch from 'node-fetch'

// TODO:: make this a configuration
const SP2_BASE_URL = 'http://apiv2.stockpiletest.com'

const defaultHeader = {
  method: 'get',
  headers: { 'Content-Type': 'application/json' }
}

const request = async (apiPath, options) => {
  const response = await fetch(SP2_BASE_URL + apiPath, options || defaultHeader)
  const json = await response.json()
  console.log("RESPONSE ", JSON.stringify(json, null, 4))
  return json
}

export const getUser = (options) => {
  return request('/api/user/users/' + userId, options)
}

export const getCountries = (options) => {
  return request('/api/user/users/countries/all', options)
}

export const getStockQuote = (symbol, options) => {
  return request('/api/marketdata/stocks/' + symbol + '/quote', options)
}
