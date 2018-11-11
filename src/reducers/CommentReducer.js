/**    var  */
import { POST_COMMENT, POST_COMMENT_SUCCESS, POST_COMMENT_FAILURE,
  REMOVE_COMMENT, REMOVE_COMMENT_SUCCESS, REMOVE_COMMENT_FAILURE,
  FETCH_COMMENT, FETCH_COMMENT_SUCCESS, FETCH_COMMENT_FAILURE,
  SHOW_COMMENT_BOX, HIDE_COMMENT_BOX
} from '../actions/CommentActions'

/**    var  */
const INITIAL_STATE = {
  commentsList: { comments: [], error: null, loading: false },
  comment: { comment: {}, error: null, loading: false },
  commentBox: false,
  element: null
}

/*
 * comment reducer
 * @params {object} state
 * @params {object} action
 * @return {object}
 * */
const commentReducer = (state = INITIAL_STATE, action) => {
  let error

  switch (action.type) {
    /*
       * MODAL
       *
       * */
    case SHOW_COMMENT_BOX:
      return { ...state, commentBox: true, element: action.payload }
    case HIDE_COMMENT_BOX:
      return { ...state, commentBox: false, element: action.payload }
    /*
       * FETCH
       *
       * */
    case FETCH_COMMENT:
      return { ...state, comment: { comments: [], error: null, loading: true } }
    case FETCH_COMMENT_SUCCESS:
      return { ...state, comment: { comments: action.payload, error: null, loading: true } }
    case FETCH_COMMENT_FAILURE:
      error = action.payload || { message: action.payload.message }// 2nd one is network or server down errors
      return { ...state, comment: { comments: [], error: error, loading: false } }

    /*
       * POST
       *
       * */
    case POST_COMMENT:
      return { ...state, res: { comment: null, error: null, loading: true } }
    case POST_COMMENT_SUCCESS:
      return { ...state, res: { comments: action.payload, error: null, loading: true } }
    case POST_COMMENT_FAILURE:
      error = action.payload || { message: action.payload.message }// 2nd one is network or server down errors
      return { ...state, res: { comments: {}, error: error, loading: false } }

    /*
       * REMOVE
       *
       * */
    case REMOVE_COMMENT:
      return { ...state, res: { comment: null, error: null, loading: true } }
    case REMOVE_COMMENT_SUCCESS:
      return { ...state, res: { comments: action.payload, error: null, loading: true } }
    case REMOVE_COMMENT_FAILURE:
      error = action.payload || { message: action.payload.message }// 2nd one is network or server down errors
      return { ...state, res: { comments: {}, error: error, loading: false } }

    default:
      return state
  }
}
/**    export  */
export default commentReducer
