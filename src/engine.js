import { Engine } from 'json-rules-engine'

import { getStockQuote } from './api'

// const basicRule = require('./mocks/basic.json')


let engine = new Engine()

// engine.addRule(basicRule)


engine.addRule({
  "conditions": {
    "all": [{
      "fact": "stock-quote",
      "operator": "equal",
      "value": "AMZN",
      "path": ".symbol"
    }, {
      "fact": "stock-quote",
      "operator": "greaterThan",
      "value": 1000,
      "path": ".high"
    }]
  },
  "event": {
    "type": "amazon-high-value",
    "params": {
      "message": "Amazon High Value"
    }
  }
})

engine.addFact('stock-quote', (params, almanac) => {
  console.log("Loading Stock Quote")
  return almanac.factValue('symbol')
    .then((symbol) => {
      return getStockQuote(symbol)
    })
})

let facts = { "symbol": "GOOG" }


const handler = (req, res, next) => {
  // engine
  //   .run(facts)
  //   .then(events => {
  //     events.map(event => console.log(event.params.message))
  //   })

  engine
    .run(facts)
    .then((events) => {
      console.log(facts.symbol + events.map(event => event.params.message))
    })
    .catch(err => console.error(err.stack))


  // getCountries(null)
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  //   .catch(err => console.error(err))
  
  res.send("SUCCESS")
}

export default handler




