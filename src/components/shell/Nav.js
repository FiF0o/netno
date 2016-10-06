/**
 * Created by jonlazarini on 06/10/16.
 */
import React from'react'
import SearchTweetContainer from '../../containers/SearchTweetContainer'

const Nav = () => {
  return (
    <div className="container">
      <div className="col-md-2">placeholder nav col-2</div>
      <div className="col-md-8">
        <SearchTweetContainer />
      </div>
      <div className="col-md-2">placeholder nav col-2</div>
    </div>
  )
}

export default Nav