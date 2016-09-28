const express = require('express')
const twitter = require('./twitter')

const app = express()
const port = process.env.PORT || 2000


app.use((req, res, next) => {

  console.log('')
  console.log('')
  console.log('req: ', req)
  console.log('')
  console.log('')
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  console.log('')
  console.log('')
  // res.send(req.query({"kikou":"zgeg"}))
  console.log('')
  console.log('')
  console.log('res: ', res)
  console.log('')
  console.log('')
  next()
})

app.get('/mentions', twitter.mentions)
app.get('/search', twitter.search_tweets)

app.listen(port, () => console.log('Magic happens on port ' + port))
