/**    var  */
import { POST_LIKE, POST_LIKE_SUCCESS, POST_LIKE_FAILURE,
  REMOVE_LIKE, REMOVE_LIKE_SUCCESS, REMOVE_LIKE_FAILURE,
  FETCH_LIKE, FETCH_LIKE_SUCCESS, FETCH_LIKE_FAILURE
} from '../actions/LikeActions'

/**    var  */
const INITIAL_STATE = {
  likesList: { likes: [], error: null, loading: false },
  like: { like: {}, error: null, loading: false }
}

/*
 * like reducer
 * @params {object} state
 * @params {object} action
 * @return {object}
 * */
const LikeReducer = (state = INITIAL_STATE, action) => {
  let error

  switch (action.type) {
    /*
       * FETCH
       *
       * */
    case FETCH_LIKE:
      return { ...state, like: { likes: [], error: null, loading: true } }
    case FETCH_LIKE_SUCCESS:
      return { ...state, like: { likes: action.payload, error: null, loading: true } }
    case FETCH_LIKE_FAILURE:
      error = action.payload /* || { message: action.payload.message }// 2nd one is network or server down errors- */
      return { ...state, like: { likes: [], error: error, loading: false } }

    /*
       * POST
       *
       * */
    case POST_LIKE:
      return { ...state, res: { like: null, error: null, loading: true } }
    case POST_LIKE_SUCCESS:
      return { ...state, res: { likes: action.payload, error: null, loading: true } }
    case POST_LIKE_FAILURE:
      error = action.payload /* || { message: action.payload.message }// 2nd one is network or server down errors- */
      return { ...state, res: { likes: {}, error: error, loading: false } }

    /*
       * REMOVE
       *
       * */
    case REMOVE_LIKE:
      return { ...state, res: { like: null, error: null, loading: true } }
    case REMOVE_LIKE_SUCCESS:
      return { ...state, res: { likes: action.payload, error: null, loading: true } }
    case REMOVE_LIKE_FAILURE:
      error = action.payload /* || { message: action.payload.message }// 2nd one is network or server down errors- */
      return { ...state, res: { likes: {}, error: error, loading: false } }

    default:
      return state
  }
}
/**    export  */
export default LikeReducer
