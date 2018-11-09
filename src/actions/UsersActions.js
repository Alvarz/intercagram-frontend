
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
 *
 *
 * */
export function getUser (id) {
  const user = new User()

  return {
    type: GET_USER,
    payload: user.get(id)
  }
}

/*
 *
 *
 * */
export function getUserSuccess (user) {
  return {
    type: GET_USER_SUCCESS,
    payload: user
  }
}

/*
 *
 *
 * */
export function getUserFailure (error) {
  return {
    type: GET_USER_FAILURE,
    payload: error
  }
}

/*
 *
 *
 * */
export function fetchUsers () {
  const user = new User()

  return {
    type: FETCH_USERS,
    payload: user.fetch()
  }
}

/*
 *
 *
 * */
export function fetchUsersSuccess (users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

/*
 *
 *
 * */
export function fetchUsersFailure (error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

/*
 *
 *
 * */
export function fetchUserPics (id) {
  const user = new User()

  return {
    type: FETCH_USERS_PICS,
    payload: user.fetchUserPics(id)
  }
}

/*
 *
 *
 * */
export function fetchUserPicsSuccess (pics) {
  return {
    type: FETCH_USERS_PICS_SUCCESS,
    payload: pics
  }
}

/*
 *
 *
 * */
export function fetchUserPicsFailure (error) {
  return {
    type: FETCH_USERS_PICS_FAILURE,
    payload: error
  }
}
