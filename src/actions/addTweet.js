import { ADD_TWEET } from '../const'

export const addTweet = () => ({
  type: ADD_TWEET,
  id: Date.now(),
})
