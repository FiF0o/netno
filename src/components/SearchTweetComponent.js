/**
 * Created by jonlazarini on 28/09/16.
 */
import React from 'react'

class SearchTweetComponent extends React.Component {
  render() {
    return (
      <div>
        <form action="" onSubmit={ this.submitTweet.bind(this) }>
          <input type="text" ref={ (input) => { this.qTweet = input } }/>
          <button type="submit">search</button>
        </form>
      </div>
    )
  }
  submitTweet(e) {
    e.preventDefault()
    const { onUserSubmitTweet } = this.props
    const newTweetQuery = this.qTweet.value
    // receives an action creator here e.g. newTweetQuery
    onUserSubmitTweet(newTweetQuery)
    this.qTweet.value=''
  }
}

export default SearchTweetComponent