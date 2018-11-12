
import User from '../models/User'

export const GET_ME = 'GET_ME'
export const GET_ME_SUCCESS = 'GET_ME_SUCCESS'
export const GET_ME_FAILURE = 'GET_ME_FAILEDURE'

export const GET_USER = 'GET_USER'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'GET_USER_FAILEDURE'

export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILEDURE'

export const FETCH_USERS_PICS = 'FETCH_USERS_PICS'
export const FETCH_USERS_PICS_SUCCESS = 'FETCH_USERS_PICS_SUCCESS'
export const FETCH_USERS_PICS_FAILURE = 'FETCH_USERS_PICS_FAILURE'

export const LOGIN = 'LOGIN_PICS'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const REGISTER = 'REGISTER'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const SET_TOKEN = 'SET_TOKEN'

/*
 * perform the sign up
 * @param {string} email
 * @param {string} password
 * @return {object}
 * */
export function register (userData) {
  const user = new User()
  return {
    type: LOGIN,
    payload: user.register(userData)
  }
}

/*
 * on success
 * @params {object} user
 * @return {object}
 * */
export function registerSuccess (user) {
  return {
    type: REGISTER_SUCCESS,
    payload: user
  }
}

/*
 * on error
 * @params {object} error
 * @return {object}
 * */
export function registerFailure (err, resp) {
  const error = err
  return {
    type: REGISTER_FAILURE,
    payload: error
  }
}
/*
 * set the token
 * @param {string} token
 * @return {object}
 * */
export function setToken (token) {
  return {
    type: SET_TOKEN,
    payload: token
  }
}
/*
 * perform the sign in
 * @param {string} email
 * @param {string} password
 * @return {object}
 * */
export function login (email, password) {
  const user = new User()
  return {
    type: LOGIN,
    payload: user.login(email, password)
  }
}

/*
 * on success
 * @params {object} user
 * @return {object}
 * */
export function loginSuccess (user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  }
}

/*
 * on error
 * @params {object} error
 * @return {object}
 * */
export function loginFailure (err, resp) {
  const error = err
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}
/*
 * get logged in data
 * @return {object}
 * */
export function getMe () {
  const user = new User()

  return {
    type: GET_ME,
    payload: user.getMe()
  }
}

/*
 * on success
 * @params {object} user
 * @return {object}
 * */
export function getMeSuccess (user) {
  return {
    type: GET_ME_SUCCESS,
    payload: user
  }
}

/*
 * on error
 * @params {object} error
 * @return {object}
 * */
export function getMeFailure (err, resp) {
  const error = err
  return {
    type: GET_ME_FAILURE,
    payload: error
  }
}

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
export function getUserFailure (err, resp) {
  const error = err
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
export function fetchUsersFailure (err, resp) {
  const error = err || resp.error
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
export function fetchUserPics (id, page = 1) {
  const user = new User()

  return {
    type: FETCH_USERS_PICS,
    payload: user.fetchUserPics(id, page = 1)
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
export function fetchUserPicsFailure (err, resp) {
  const error = err
  return {
    type: FETCH_USERS_PICS_FAILURE,
    payload: error
  }
}
