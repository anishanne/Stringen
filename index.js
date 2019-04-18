const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.text())

function genstring(length){
  if (isNaN(length)){
    return "Enter a number. Input: "+length
  }
  var result = ""
  var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (i = 0; i < length; i++) { 
    result += possible.charAt(Math.floor(Math.random() * possible.length));
  }  
  return result
  
}


app.use('/stringen', express.static('demo'))

app.post('/stringen', (req, res) => {
  res.send(genstring(req.body))
})

app.get('/stringen/:string', (req, res) => {
  res.send(genstring(req.params.string))
})

app.listen(8080, () => console.log('> Listening!'))
