
import Pic from '../models/Pic'

export const FETCH_FEED = 'FETCH_FEED'
export const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS'
export const FETCH_FEED_FAILURE = 'FETCH_FEED_FAILEDURE'

/*
 * fetch action
 * @return {object}
 * */
export function fetchFeed (page = 1) {
  const pic = new Pic()

  return {
    type: FETCH_FEED,
    payload: pic.fetchFeed(page)
  }
}

/*
 * on success
 * @param {Array} poics
 * @return {object}
 * */
export function fetchFeedSuccess (pics) {
  return {
    type: FETCH_FEED_SUCCESS,
    payload: pics
  }
}

/*
 * on error
 * @param {object} error
 * @return {object}
 * */
export function fetchFeedFailure (err, resp) {
  const error = err
  console.warn(error)
  return {
    type: FETCH_FEED_FAILURE,
    payload: error
  }
}
