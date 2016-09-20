/**
 * Created by jonlazarini on 08/09/16.
 */
import React from 'react';

const Tweet = ({id, }) => {
  return(
    <div>{ id }</div>
  )
};

const Tweets = ({ tweetList, }) => {
  return (
    <div>
      <ul>
        {
          tweetList.map(tweet => {
            const params = {
              ...tweet
            }
            return (
              <li
                key={tweet.id} >
                  <Tweet { params } />
              </li>
             )
          })
        }
      </ul>
    </div>
  )
};

export default Tweets