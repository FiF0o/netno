/**
 * Created by jonlazarini on 18/08/16.
 */
import React from 'react';

class SearchTweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // stores username to pass it down in route url
      username: this.props.routes
    }
  }
  render() {
    console.log('SearchTweets - this:', this);
    // console.log("this.state.username", this.state.username);
    return (
      <div className="col-sm-12">
        <form action="" onSubmit={ () => this._handleSubmit() }>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={ (input) => this._tweetQuery = input }/>
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search</button>
          </div>
        </form>
      </div>
    );
  }
  _handleSubmit() {
    const tweetQuery = this._tweetQuery.value;
    this._tweetQuery = '';
    console.log('tweetQuery in SEARCH BOX:', tweetQuery);
    // TODO See whether updating endpoint on query is required, perhaps for
    // saving to the server
    // const username = this.state.username;
    // console.log('route on search query: ', `/profile/${username}/tweets/${tweetQuery}`);
    // this.context.router.push(`/profile/${username}/tweets/?q=${tweetQuery}`);
  }
}

/*
  Use PropTypes validation to share Router properties (history,
   routes and context) so that we can access our url routes for updating end
    point in _handleSubmit()
*/
SearchTweets.PropTypes = {
  history: React.PropTypes.object.isRequired,
  // routes: React.propTypes.object.isRequired,
};
/* needs to be added for this.context to work properly and not be returned as an empty object */
SearchTweets.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default SearchTweets;
