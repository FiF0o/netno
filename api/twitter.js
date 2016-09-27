const OAuth = require('oauth')
const util = require('util')
const credentials = require('../config/credentials.json')

const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  credentials.key, credentials.secret, '1.0A', null, 'HMAC-SHA1'
)

exports.mentions = (req, res) => {
  let url = 'https://api.twitter.com/1.1/statuses/mentions_timeline.json?'

  if (req.query.since_id) url += `since_id=${req.query.since_id}&`
  if (req.query.count) url += `count=${req.query.count}&`

  oauth.get(url, credentials.accessToken, credentials.accessTokenSecret, (err, data) => {
    if (err) {
      console.error(err.stack)
      res.status(500).send('Error: could not retrieve mentions')
    } else {
      console.log(util.inspect(data))
      res.send(data)
    }
  })
}
