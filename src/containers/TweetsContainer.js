/**
 * Created by jonlazarini on 08/09/16.
 */
import React from 'react'
import store from '../store'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTweetsAsync } from '../actions/getTweetsAsync'
import Tweets from '../components/Tweets'

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    onLoadTweets: getTweetsAsync
  }, dispatch)

const mapStateToProps = (state) => {
  console.log('state.tweets in TweetsContainer', state.tweets)
  // .tweets is the reducer which is a data subset of the state
  return { tweetList: state.tweets }
}

class TweetsContainer extends React.Component {
  componentDidMount() {
    store.dispatch(getTweetsAsync())
  }

  render(){
    return (
      <Tweets { ...this.props } />
    )
  }
}

// destructuring this.props to pass it down to the child component Tweets
// better use Tweets(this.props) for performance, jsx recompiling

export default connect(mapStateToProps, mapDispatchToProps)(TweetsContainer)
