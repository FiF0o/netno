/**
 * Created by jonlazarini on 08/09/16.
 */
import React from 'react';

const Tweet = ({ id, avatar, first_name, last_name }) => {
  return (
    <div>
      <h2>Toto</h2>
      <p>{ id }</p>
      <p>{ avatar }</p>
      <p>{ first_name }</p>
      <p>{ last_name }</p>
    </div>
  )
};

const Tweets = ({ tweetList }) => {
  return (
    <div>
      <ul>
        {
          tweetList.map(tweet => {
            const tParams = {
              ...tweet
            }
            return (
              <li key={tweet.id} >
                <Tweet { ...tParams } />
              </li>
             )
          })
        }
      </ul>
    </div>
  )
};

export default Tweets