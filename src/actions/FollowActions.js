
import Follow from '../models/Follow'

export const FETCH_FOLLOWING = 'FETCH_FOLLOWING'
export const FETCH_FOLLOWING_SUCCESS = 'FETCH_FOLLOWING_SUCCESS'
export const FETCH_FOLLOWING_FAILURE = 'FETCH_FOLLOWING_FAILEDURE'

export const FETCH_FOLLOWERS = 'FETCH_FOLLOWERS'
export const FETCH_FOLLOWERS_SUCCESS = 'FETCH_FOLLOWERS_SUCCESS'
export const FETCH_FOLLOWERS_FAILURE = 'FETCH_FOLLOWERS_FAILEDURE'

export const POST_FOLLOW = 'POST_FOLLOW'
export const POST_FOLLOW_SUCCESS = 'POST_FOLLOW_SUCCESS'
export const POST_FOLLOW_FAILURE = 'POST_FOLLOW_FAILEDURE'

export const REMOVE_FOLLOW = 'REMOVE_FOLLOW'
export const REMOVE_FOLLOW_SUCCESS = 'REMOVE_FOLLOW_SUCCESS'
export const REMOVE_FOLLOW_FAILURE = 'REMOVE_FOLLOW_FAILEDURE'

export const IS_FOLLOWER = 'IS_FOLLOWER'

export function isFollower (isFollower) {
  return {
    type: IS_FOLLOWER,
    payload: isFollower
  }
}
/*
 * create new user action
 * @param {object}
 * @return {object}
 * */
export function postFollow (user) {
  const follow = new Follow()

  return {
    type: POST_FOLLOW,
    payload: follow.post(user)
  }
}

/*
 * on success
 * @return {object}
 * */
export function postFollowSuccess () {
  return {
    type: POST_FOLLOW_SUCCESS,
    payload: {}
  }
}

/*
 * on error
 * @param {object} error
 * @return {object}
 * */
export function postFollowFailure (err, resp) {
  const error = err || resp.error
  return {
    type: POST_FOLLOW_FAILURE,
    payload: error
  }
}

/*
/*
 * fetch follow
 * @return {object}
 * */
export function fetchFollowing (id) {
  const follow = new Follow()

  return {
    type: FETCH_FOLLOWING,
    payload: follow.fetchFollowing(id)
  }
}

/*
 * on sucess
 * @params {array} users
 * @return {object}
 * */
export function fetchFollowingSuccess (users) {
  return {
    type: FETCH_FOLLOWING_SUCCESS,
    payload: users
  }
}

/*
 * on error
 * @params {object} error
 * @return {object}
 * */
export function fetchFollowingFailure (err, resp) {
  const error = err
  return {
    type: FETCH_FOLLOWING_FAILURE,
    payload: error
  }
}

/*
 * fetch follow
 * @return {object}
 * */
export function fetchFollowers (id) {
  const follow = new Follow()

  return {
    type: FETCH_FOLLOWERS,
    payload: follow.fetchFollowers(id)
  }
}

/*
 * on sucess
 * @params {array} users
 * @return {object}
 * */
export function fetchFollowersSuccess (users) {
  return {
    type: FETCH_FOLLOWERS_SUCCESS,
    payload: users
  }
}

/*
 * on error
 * @params {object} error
 * @return {object}
 * */
export function fetchFollowersFailure (err, resp) {
  const error = err
  return {
    type: FETCH_FOLLOWERS_FAILURE,
    payload: error
  }
}

/*
 * remove follow
 * @params {object} user
 * @return {object}
 * */
export function removeFollow (user) {
  const follow = new Follow()

  return {
    type: REMOVE_FOLLOW,
    payload: follow.remove(user._id)
  }
}

/*
 *  on success
 * @params {object} data
 * @return {object}
 * */
export function removeFollowSuccess (data) {
  return {
    type: REMOVE_FOLLOW_SUCCESS,
    payload: data
  }
}

/*
 *  on error
 * @params {object} error
 * @return {object}
 * */
export function removeFollowFailure (err, resp) {
  const error = err || resp.error
  return {
    type: REMOVE_FOLLOW_FAILURE,
    payload: error
  }
}
