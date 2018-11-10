
/**    var  */
import { FETCH_FEED, FETCH_FEED_SUCCESS, FETCH_FEED_FAILURE } from '../actions/FeedActions'

/**    var  */
const INITIAL_STATE = {
  feed: { pics: [], error: null, loading: false }

}

/*
 * feed reducer
 * @params {object} state
 * @params {object} action
 * @return {object}
 * */
const FeedReducer = (state = INITIAL_STATE, action) => {
  let error

  switch (action.type) {
    /*
       * FETCH
       *
       * */
    case FETCH_FEED:
      return { ...state, feed: { pics: [], error: null, loading: true } }
    case FETCH_FEED_SUCCESS:
      return { ...state, feed: { pics: action.payload, error: null, loading: true } }
    case FETCH_FEED_FAILURE:
      error = action.payload || { message: action.payload.message }// 2nd one is network or server down errors
      return { ...state, feed: { pics: [], error: error, loading: false } }

    default:
      return state
  }
}
/**    export  */
export default FeedReducer
