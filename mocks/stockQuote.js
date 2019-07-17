import { getStockQuote } from '../api'



export const stockQuote = (params, almanac) => {
  console.log('loading stock information')
  return almanac.factValue('symbol')
    .then((code) => {
      return getStockQuote(symbol)
    })
}

