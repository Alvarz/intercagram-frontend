
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
 *
 *
 * */
export function postLike (pic) {
  const like = new Like()

  return {
    type: FETCH_LIKE,
    payload: like.post(pic)
  }
}

/*
 *
 *
 * */
export function postLikeSuccess () {
  return {
    type: FETCH_LIKE_SUCCESS,
    payload: {}
  }
}

/*
 *
 *
 * */
export function postLikeFailure (error) {
  return {
    type: FETCH_LIKE_FAILURE,
    payload: error
  }
}
/*
 *
 *
 * */
export function fetchLike () {
  const pic = new Like()

  return {
    type: FETCH_LIKE,
    payload: pic.fetchLike()
  }
}

/*
 *
 *
 * */
export function fetchLikeSuccess (pics) {
  return {
    type: FETCH_LIKE_SUCCESS,
    payload: pics
  }
}

/*
 *
 *
 * */
export function fetchLikeFailure (error) {
  return {
    type: FETCH_LIKE_FAILURE,
    payload: error
  }
}

/*
 *
 *
 * */
export function removeLike (pic) {
  const like = new Like()

  return {
    type: REMOVE_LIKE,
    payload: like.remove(pic._id)
  }
}

/*
 *
 *
 * */
export function removeLikeSuccess (data) {
  return {
    type: REMOVE_LIKE_SUCCESS,
    payload: data
  }
}

/*
 *
 *
 * */
export function removeLikeFailure (error) {
  return {
    type: REMOVE_LIKE_FAILURE,
    payload: error
  }
}
