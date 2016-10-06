/**
 * Created by jonlazarini on 12/08/16.
 */
import React from 'react'
import TweetsContainer from '../../containers/TweetsContainer'


class Home extends React.Component {
  render() {
  return (
    <div>
      <h2 className='text-center'>
        Home section
      </h2>
      <div>
        <TweetsContainer />
      </div>
    </div>
    )
  }
}

export default Home
