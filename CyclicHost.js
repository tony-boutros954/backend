const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello tony')
})

app.get('/data', function (req, res) {
    var data = [{id:1, name:'tony',lastname:'boutros'},
                {id:2, name:'elio',lastname:'challita'},
                {id:3, name:'roy',lastname:'raad'}]
    res.send(data);
  })

app.listen(3000)