const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.json({Name: 'app', value: 'test'})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
