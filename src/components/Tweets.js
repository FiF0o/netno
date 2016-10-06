/**
 * Created by jonlazarini on 08/09/16.
 */
import React from 'react';

const Tweet = ({ created_at, favorite_count, retweet_count, text, source, user }) => {
  // extracts user info from tweet (tParams)
  const userInfo = { ...user };
  return (
    <div>
      <div className="col-md-6">
        <p>{ created_at }</p>
        <p>{ favorite_count }</p>
        <p>{ retweet_count }</p>
        <p>{ text }</p>
        <p>{ source }</p>
      </div>
      <div>
        <p>{ userInfo.name }</p>
        <p>{ userInfo.location }</p>
        <p>{ userInfo.description }</p>
        <p>{ userInfo.profile_image_url_https }</p>
      </div>
    </div>
  )
};

const Tweets = ({ tweetList, hasLoaded }) => {
  return (
    <div>
      { hasLoaded ?
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
      </ul> :
        <div>
          <h1>Fetch Tweets</h1>
        </div>
      }
    </div>
  )
};

export default Tweets