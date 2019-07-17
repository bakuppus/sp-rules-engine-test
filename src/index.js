const express = require('express')
const bodyParser = require('body-parser')
const debug = require('debug')('rules-engine:index')
const expressSanitizer = require('express-sanitizer')

import handler from './engine'


const app = express()

app.get(
  '/',
  expressSanitizer(),
  bodyParser.json(),
  handler
)

app.listen(3000, () => console.log('Rule Engine running'))

