const OAuth = require('oauth')
const util = require('util')
const credentials = require('../config/credentials.json')

const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  credentials.key, credentials.secret, '1.0A', null, 'HMAC-SHA1'
)

exports.fetch = (url, res) => {
  oauth.get(url, credentials.accessToken, credentials.accessTokenSecret, (err, data) => {
    if (err) {
      console.error(err)
      res.status(err.statusCode).send(err.data)
    } else {
      console.log('data: ', util.inspect(data))
      res.send(data)
    }
  })
}
