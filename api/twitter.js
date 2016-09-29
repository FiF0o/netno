const oauth = require('./oauth')

const twitterApiBaseUrl = 'https://api.twitter.com/1.1'

exports.mentions = (req, res) => {
  let url = `${twitterApiBaseUrl}/statuses/mentions_timeline.json?`
  if (req.query.since_id) url += `since_id=${req.query.since_id}&`
  if (req.query.count) url += `count=${req.query.count}&`
  oauth.fetch(url, res)
}

exports.search_tweets = (req, res) => {
  let url = `${twitterApiBaseUrl}/search/tweets.json?`
  const enc = encodeURIComponent(`${req.query.q}`)

  if (req.query.q) url += `q=${enc}&`
  if (req.query.count) url += `count=${req.query.count}&`
  oauth.fetch(url, res)
}
