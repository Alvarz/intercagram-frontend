/**    var  */
import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE, SEARCH_RESULT } from '../actions/SearchActions'

/**    var  */
const INITIAL_STATE = {
  picsList: { pics: [], error: null, loading: false },
  pic: { pic: {}, error: null, loading: false },
  stateAreSearchResult: false
}

/*
 * search reducer
 * @params {object} state
 * @params {object} action
 * @return {object}
 * */
const SearchReducer = (state = INITIAL_STATE, action) => {
  let error

  switch (action.type) {
    /*
       * SEARCH
       *
       * */
    case SEARCH:
      return { ...state, picsList: { pics: [], error: null, loading: true } }
    case SEARCH_SUCCESS:
      return { ...state, picsList: { pics: action.payload, error: null, loading: true } }
    case SEARCH_FAILURE:
      error = action.payload /* || { message: action.payload.message }// 2nd one is network or server down errors- */
      return { ...state, picsList: { pics: [], error: error, loading: false } }

    /*
     * SEARCH RESULT FLAG
     * */
    case SEARCH_RESULT:
      return { ...state, stateAreSearchResult: action.payload }
    default:
      return state
  }
}
/**    export  */
export default SearchReducer
