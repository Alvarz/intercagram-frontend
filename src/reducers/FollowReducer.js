/**    var  */
import { POST_FOLLOW, POST_FOLLOW_SUCCESS, POST_FOLLOW_FAILURE,
  REMOVE_FOLLOW, REMOVE_FOLLOW_SUCCESS, REMOVE_FOLLOW_FAILURE,
  FETCH_FOLLOWERS, FETCH_FOLLOWERS_SUCCESS, FETCH_FOLLOWERS_FAILURE,
  FETCH_FOLLOWING, FETCH_FOLLOWING_SUCCESS, FETCH_FOLLOWING_FAILURE,
  IS_FOLLOWER
} from '../actions/FollowActions'

/**    var  */
const INITIAL_STATE = {
  follow: { following: [], followers: [], error: null, loading: false },
  result: { follow: {}, error: null, loading: false },
  isFollower: false
}

/*
 * follow reducer
 * @params {object} state
 * @params {object} action
 * @return {object}
 * */
const followReducer = (state = INITIAL_STATE, action) => {
  let error

  switch (action.type) {
    /*
       * FETCH FOLLOWING
       *
       * */
    case FETCH_FOLLOWING:
      return { ...state, follow: { following: [], error: null, loading: true } }
    case FETCH_FOLLOWING_SUCCESS:
      return { ...state, follow: { following: action.payload, error: null, loading: false } }
    case FETCH_FOLLOWING_FAILURE:
      error = action.payload || { message: action.payload.message }// 2nd one is network or server down errors
      return { ...state, follow: { following: [], error: error, loading: false } }

    /*
       * FETCH FOLLOWERS
       *
       * */
    case FETCH_FOLLOWERS:
      return { ...state, follow: { followers: [], error: null, loading: true } }
    case FETCH_FOLLOWERS_SUCCESS:
      return { ...state, follow: { followers: action.payload, error: null, loading: false } }
    case FETCH_FOLLOWERS_FAILURE:
      error = action.payload || { message: action.payload.message }// 2nd one is network or server down errors
      return { ...state, follow: { followers: [], error: error, loading: false } }

    /*
       * POST
       *
       * */
    case POST_FOLLOW:
      return { ...state, result: { result: null, error: null, loading: true } }
    case POST_FOLLOW_SUCCESS:
      return { ...state, result: { result: action.payload, error: null, loading: false } }
    case POST_FOLLOW_FAILURE:
      error = action.payload || { message: action.payload.message }// 2nd one is network or server down errors
      return { ...state, result: { result: {}, error: error, loading: false } }

    /*
       * REMOVE
       *
       * */
    case REMOVE_FOLLOW:
      return { ...state, result: { result: null, error: null, loading: true } }
    case REMOVE_FOLLOW_SUCCESS:
      return { ...state, result: { result: action.payload, error: null, loading: false } }
    case REMOVE_FOLLOW_FAILURE:
      error = action.payload || { message: action.payload.message }// 2nd one is network or server down errors
      return { ...state, result: { result: {}, error: error, loading: false } }

    /*
     * EXTRAS
     *
     */
    case IS_FOLLOWER:
      return { ...state, isFollower: action.payload }
    default:
      return state
  }
}
/**    export  */
export default followReducer
