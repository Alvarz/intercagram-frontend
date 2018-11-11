
import Pic from '../models/Pic'

export const SEARCH = 'SEARCH'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAILURE = 'SEARCH_FAILEDURE'
export const SEARCH_RESULT = 'SEARCH_RESULT'
/*
 *  fetch likes
 * @return {object}
 * */
export function search (query) {
  const pic = new Pic()

  return {
    type: SEARCH,
    payload: pic.search(query)
  }
}

/*
 *  on success
 * @params {array} pics
 * @return {object}
 * */
export function searchSuccess (pics) {
  return {
    type: SEARCH_SUCCESS,
    payload: pics
  }
}

/*
 *  on error
 * @params {object} error
 * @return {object}
 * */
export function searchFailure (err, resp) {
  const error = err
  return {
    type: SEARCH_FAILURE,
    payload: error
  }
}

export function setFromSearchResult (bool) {
  return {
    type: SEARCH_RESULT,
    payload: bool
  }
}
