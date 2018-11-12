
/**    var  */
import {
  FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,
  FETCH_USERS_PICS, FETCH_USERS_PICS_SUCCESS, FETCH_USERS_PICS_FAILURE,
  GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE, SET_TOKEN,
  GET_ME, GET_ME_SUCCESS, GET_ME_FAILURE,
  LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE,
  REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE
} from '../actions/UsersActions'

/**    var  */
const INITIAL_STATE = {
  usersList: { users: [], error: null, loading: false },
  user: { user: {}, error: null, loading: false },
  me: { user: {}, error: null, loading: false },
  picList: { pics: [], error: null, loading: false },
  signin: { login: {}, error: null, loading: false },
  signup: { register: {}, error: null, loading: false },
  token: ''
}

/*
 * user reducer
 * @params {object} state
 * @params {object} action
 * @return {object}
 * */
const userReducer = (state = INITIAL_STATE, action) => {
  let error

  switch (action.type) {
    /*
       * REGISTER
       *
       * */
    case REGISTER:
      return { ...state, signup: { register: {}, error: null, loading: true } }
    case REGISTER_SUCCESS:
      return { ...state, signup: { register: action.payload, error: null, loading: true } }
    case REGISTER_FAILURE:
      error = action.payload /** || { message: action.payload.message }// 2nd one is network or server down errors */
      return { ...state, signup: { register: {}, error: error, loading: false } }
    /*
       * LOGIN
       *
       * */
    case LOGIN:
      return { ...state, signin: { login: {}, error: null, loading: true } }
    case LOGIN_SUCCESS:
      return { ...state, signin: { login: action.payload, error: null, loading: true } }
    case LOGIN_FAILURE:
      error = action.payload /** || { message: action.payload.message }// 2nd one is network or server down errors */
      return { ...state, signin: { login: {}, error: error, loading: false } }
    /*
       * SET TOKEN
       *
       * */
    case SET_TOKEN:
      return { ...state, token: action.payload }
    /*
       * GET ME
       *
       * */
    case GET_ME:
      return { ...state, me: { user: {}, error: null, loading: true } }
    case GET_ME_SUCCESS:
      return { ...state, me: { user: action.payload, error: null, loading: true } }
    case GET_ME_FAILURE:
      error = action.payload /** || { message: action.payload.message }// 2nd one is network or server down errors */
      return { ...state, me: { user: {}, error: error, loading: false } }
    /*
       * FETCH
       *
       * */
    case FETCH_USERS:
      return { ...state, usersList: { users: [], error: null, loading: true } }
    case FETCH_USERS_SUCCESS:
      return { ...state, usersList: { users: action.payload, error: null, loading: true } }
    case FETCH_USERS_FAILURE:
      error = action.payload /** || { message: action.payload.message }// 2nd one is network or server down errors */
      return { ...state, usersList: { users: [], error: error, loading: false } }

    /*
       * FETCH PICS
       *
       * */
    case FETCH_USERS_PICS:
      return { ...state, picList: { pics: [], error: null, loading: true } }
    case FETCH_USERS_PICS_SUCCESS:
      return { ...state, picList: { pics: action.payload, error: null, loading: true } }
    case FETCH_USERS_PICS_FAILURE:
      error = action.payload /** || { message: action.payload.message }// 2nd one is network or server down errors */
      return { ...state, picList: { pics: [], error: error, loading: false } }
      /*
       * GET
       *
       * */
    case GET_USER:
      return { ...state, user: { user: {}, error: null, loading: true } }
    case GET_USER_SUCCESS:
      return { ...state, user: { user: action.payload, error: null, loading: true } }
    case GET_USER_FAILURE:
      error = action.payload /** || { message: action.payload.message }// 2nd one is network or server down errors */
      return { ...state, user: { user: {}, error: error, loading: false } }

    default:
      return state
  }
}
/**    export  */
export default userReducer
