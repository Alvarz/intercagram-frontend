
import Like from '../models/Like'

export const FETCH_LIKE = 'FETCH_LIKE'
export const FETCH_LIKE_SUCCESS = 'FETCH_LIKE_SUCCESS'
export const FETCH_LIKE_FAILURE = 'FETCH_LIKE_FAILEDURE'

export const POST_LIKE = 'POST_LIKE'
export const POST_LIKE_SUCCESS = 'POST_LIKE_SUCCESS'
export const POST_LIKE_FAILURE = 'POST_LIKE_FAILEDURE'

export const REMOVE_LIKE = 'REMOVE_LIKE'
export const REMOVE_LIKE_SUCCESS = 'REMOVE_LIKE_SUCCESS'
export const REMOVE_LIKE_FAILURE = 'REMOVE_LIKE_FAILEDURE'
/*
 *  give like to a pic|
 * @params {object} pic
 * @return {object}
 * */
export function postLike (pic) {
  const like = new Like()

  return {
    type: FETCH_LIKE,
    payload: like.post(pic)
  }
}

/*
 * on sucess
 * @return {object}
 * */
export function postLikeSuccess () {
  return {
    type: FETCH_LIKE_SUCCESS,
    payload: {}
  }
}

/*
 *  on error
 * @params {object} error
 * @return {object}
 * */
export function postLikeFailure (error) {
  return {
    type: FETCH_LIKE_FAILURE,
    payload: error
  }
}
/*
 *  fetch likes
 * @return {object}
 * */
export function fetchLike () {
  const pic = new Like()

  return {
    type: FETCH_LIKE,
    payload: pic.fetchLike()
  }
}

/*
 *  on success
 * @params {array} pics
 * @return {object}
 * */
export function fetchLikeSuccess (pics) {
  return {
    type: FETCH_LIKE_SUCCESS,
    payload: pics
  }
}

/*
 *  on error
 * @params {object} error
 * @return {object}
 * */
export function fetchLikeFailure (error) {
  return {
    type: FETCH_LIKE_FAILURE,
    payload: error
  }
}

/*
 *  unlike
 * @params {object} pic
 * @return {object}
 * */
export function removeLike (pic) {
  const like = new Like()

  return {
    type: REMOVE_LIKE,
    payload: like.remove(pic._id)
  }
}

/*
 *  on success
 * @params {object} data
 * @return {object}
 * */
export function removeLikeSuccess (data) {
  return {
    type: REMOVE_LIKE_SUCCESS,
    payload: data
  }
}

/*
 *  on error
 * @params {object} data
 * @return {object}
 * */
export function removeLikeFailure (error) {
  return {
    type: REMOVE_LIKE_FAILURE,
    payload: error
  }
}
