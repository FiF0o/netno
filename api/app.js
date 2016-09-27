const express = require('express')
const twitter = require('./twitter')

const app = express()
const port = process.env.PORT || 2000

app.get('/mentions', twitter.mentions)
app.get('/search', twitter.search_tweets)

app.listen(port, () => console.log('Magic happens on port ' + port))
