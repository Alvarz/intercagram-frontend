
import Follow from '../models/Follow'

export const FETCH_FOLLOW = 'FETCH_FOLLOW'
export const FETCH_FOLLOW_SUCCESS = 'FETCH_FOLLOW_SUCCESS'
export const FETCH_FOLLOW_FAILURE = 'FETCH_FOLLOW_FAILEDURE'

export const POST_FOLLOW = 'POST_FOLLOW'
export const POST_FOLLOW_SUCCESS = 'POST_FOLLOW_SUCCESS'
export const POST_FOLLOW_FAILURE = 'POST_FOLLOW_FAILEDURE'

export const REMOVE_FOLLOW = 'REMOVE_FOLLOW'
export const REMOVE_FOLLOW_SUCCESS = 'REMOVE_FOLLOW_SUCCESS'
export const REMOVE_FOLLOW_FAILURE = 'REMOVE_FOLLOW_FAILEDURE'
/*
 *
 *
 * */
export function postFollow (user) {
  const follow = new Follow()

  return {
    type: FETCH_FOLLOW,
    payload: follow.post(user)
  }
}

/*
 *
 *
 * */
export function postFollowSuccess () {
  return {
    type: FETCH_FOLLOW_SUCCESS,
    payload: {}
  }
}

/*
 *
 *
 * */
export function postFollowFailure (error) {
  return {
    type: FETCH_FOLLOW_FAILURE,
    payload: error
  }
}
/*
 *
 *
 * */
export function fetchFollow () {
  const user = new Follow()

  return {
    type: FETCH_FOLLOW,
    payload: user.fetchFollow()
  }
}

/*
 *
 *
 * */
export function fetchFollowSuccess (users) {
  return {
    type: FETCH_FOLLOW_SUCCESS,
    payload: users
  }
}

/*
 *
 *
 * */
export function fetchFollowFailure (error) {
  return {
    type: FETCH_FOLLOW_FAILURE,
    payload: error
  }
}

/*
 *
 *
 * */
export function removeFollow (user) {
  const follow = new Follow()

  return {
    type: REMOVE_FOLLOW,
    payload: follow.remove(user._id)
  }
}

/*
 *
 *
 * */
export function removeFollowSuccess (data) {
  return {
    type: REMOVE_FOLLOW_SUCCESS,
    payload: data
  }
}

/*
 *
 *
 * */
export function removeFollowFailure (error) {
  return {
    type: REMOVE_FOLLOW_FAILURE,
    payload: error
  }
}
