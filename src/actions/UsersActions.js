
import User from '../models/User'

export const GET_USER = 'GET_USER'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'GET_USER_FAILEDURE'

export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILEDURE'

export const FETCH_USERS_PICS = 'FETCH_USERS_PICS'
export const FETCH_USERS_PICS_SUCCESS = 'FETCH_USERS_PICS_SUCCESS'
export const FETCH_USERS_PICS_FAILURE = 'FETCH_USERS_PICS_FAILURE'
/*
 * get user
 * @params {number} id
 * @return {object}
 * */
export function getUser (id) {
  const user = new User()

  return {
    type: GET_USER,
    payload: user.get(id)
  }
}

/*
 * on success
 * @params {object} user
 * @return {object}
 * */
export function getUserSuccess (user) {
  return {
    type: GET_USER_SUCCESS,
    payload: user
  }
}

/*
 * on error
 * @params {object} error
 * @return {object}
 * */
export function getUserFailure (error) {
  return {
    type: GET_USER_FAILURE,
    payload: error
  }
}

/*
 * fetch users
 * @return {object}
 * */
export function fetchUsers () {
  const user = new User()

  return {
    type: FETCH_USERS,
    payload: user.fetch()
  }
}

/*
 * on success
 * @params {array} users
 * @return {object}
 * */
export function fetchUsersSuccess (users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

/*
 * on error
 * @params {object} error
 * @return {object}
 * */
export function fetchUsersFailure (error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

/*
 * fetch user pics
 * @params {number} id
 * @return {object}
 * */
export function fetchUserPics (id) {
  const user = new User()

  return {
    type: FETCH_USERS_PICS,
    payload: user.fetchUserPics(id)
  }
}

/*
 * on success
 * @params {array} pics|
 * @return {object}
 * */
export function fetchUserPicsSuccess (pics) {
  return {
    type: FETCH_USERS_PICS_SUCCESS,
    payload: pics
  }
}

/*
 * on error
 * @params {object} error
 * @return {object}
 * */
export function fetchUserPicsFailure (error) {
  return {
    type: FETCH_USERS_PICS_FAILURE,
    payload: error
  }
}
