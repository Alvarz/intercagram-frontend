
import Pic from '../models/Pic'

export const FETCH_FEED = 'FETCH_FEED'
export const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS'
export const FETCH_FEED_FAILURE = 'FETCH_FEED_FAILEDURE'

/*
 *
 *
 * */
export function fetchFeed () {
  const pic = new Pic()

  return {
    type: FETCH_FEED,
    payload: pic.fetchFeed()
  }
}

/*
 *
 *
 * */
export function fetchFeedSuccess (pics) {
  return {
    type: FETCH_FEED_SUCCESS,
    payload: pics
  }
}

/*
 *
 *
 * */
export function fetchFeedFailure (error) {
  return {
    type: FETCH_FEED_FAILURE,
    payload: error
  }
}
