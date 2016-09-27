const OAuth = require('oauth')
const util = require('util')
// const credentials = require('../config/credentials.json')
const keys = require('../keys.js')

const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  keys.key, keys.secret, '1.0A', null, 'HMAC-SHA1'
)

exports.mentions = (req, res) => {
  let url = 'https://api.twitter.com/1.1/statuses/mentions_timeline.json?'

  if (req.query.since_id) url += `since_id=${req.query.since_id}&`
  if (req.query.count) url += `count=${req.query.count}&`

  oauth.get(url, keys.accessToken, keys.accessTokenSecret, (err, data) => {
    if (err) {
      console.error(err.stack)
      res.status(500).send('Error: could not retrieve mentions')
    } else {
      // console.log('url mentions: ', url) - returns
      // https://api.twitter.com/1.1/statuses/mentions_timeline.json?since_id=1&count=4& when hitting localhost:2000/mentions?since_id=1&count=4
      console.log('data: ', util.inspect(data))
      res.send(data)
    }
  })
}

exports.search_tweets = (req, res) => {
  let url = 'https://api.twitter.com/1.1/search/tweets.json?'

  /** Twatter query signature for search_tweets endpoint
   * { count:10, q:"string" }
   *
   * GET
   * https://api.twitter.com/1.1/search/tweets.json?q=toto&count=4&
   *
   * endpoint client side (e.g.): http://localhost:2000/search?q=toto&count=4&
   * returns 10 count by default
   */
  if (req.query.q) url += `q=${req.query.q}&`
  if (req.query.count) url += `count=${req.query.count}&`

  oauth.get(url, keys.accessToken, keys.accessTokenSecret, (err, data) => {
    if (err) {
      console.log('error case url: ', url)
      console.error(err.stack)
      res.status(500).send('Error: could not retrieve tweets')
    } else {
      console.log('data: ', util.inspect(data))
      res.send(data)
    }
  })
}
