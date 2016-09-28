const express = require('express')
const twitter = require('./twitter')

const app = express()
const port = process.env.PORT || 2000

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.get('/mentions', twitter.mentions)
app.get('/search', twitter.search_tweets)

app.listen(port, () => console.log('Magic happens on port ' + port))
