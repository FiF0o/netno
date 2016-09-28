/**
 * Created by jonlazarini on 28/09/16.
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTweetsAsync } from '../actions/getTweetsAsync'

import SearchTweetComponent from '../components/SearchTweetComponent';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ onUserSubmitTweet: getTweetsAsync }, dispatch);

export default connect(undefined, mapDispatchToProps)(SearchTweetComponent);