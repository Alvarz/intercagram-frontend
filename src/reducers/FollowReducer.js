/**    var  */
import { POST_FOLLOW, POST_FOLLOW_SUCCESS, POST_FOLLOW_FAILURE,
  REMOVE_FOLLOW, REMOVE_FOLLOW_SUCCESS, REMOVE_FOLLOW_FAILURE,
  FETCH_FOLLOW, FETCH_FOLLOW_SUCCESS, FETCH_FOLLOW_FAILURE
} from '../actions/followActions'

/**    var  */
const INITIAL_STATE = {
  followsList: { follows: [], error: null, loading: false },
  follow: { follow: {}, error: null, loading: false }
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
       * FETCH
       *
       * */
    case FETCH_FOLLOW:
      return { ...state, follow: { follows: [], error: null, loading: true } }
    case FETCH_FOLLOW_SUCCESS:
      return { ...state, follow: { follows: action.payload, error: null, loading: true } }
    case FETCH_FOLLOW_FAILURE:
      error = action.payload || { message: action.payload.message }// 2nd one is network or server down errors
      return { ...state, follow: { follows: [], error: error, loading: false } }

    /*
       * POST
       *
       * */
    case POST_FOLLOW:
      return { ...state, follow: { follow: null, error: null, loading: true } }
    case POST_FOLLOW_SUCCESS:
      return { ...state, follow: { follows: action.payload, error: null, loading: true } }
    case POST_FOLLOW_FAILURE:
      error = action.payload || { message: action.payload.message }// 2nd one is network or server down errors
      return { ...state, follow: { follows: {}, error: error, loading: false } }

    /*
       * REMOVE
       *
       * */
    case REMOVE_FOLLOW:
      return { ...state, follow: { follow: null, error: null, loading: true } }
    case REMOVE_FOLLOW_SUCCESS:
      return { ...state, follow: { follows: action.payload, error: null, loading: true } }
    case REMOVE_FOLLOW_FAILURE:
      error = action.payload || { message: action.payload.message }// 2nd one is network or server down errors
      return { ...state, follow: { follows: {}, error: error, loading: false } }

    default:
      return state
  }
}
/**    export  */
export default followReducer
