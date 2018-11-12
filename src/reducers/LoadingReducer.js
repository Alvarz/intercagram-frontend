/**    var  */
import { SHOW_LOADING, HIDE_LOADING } from '../actions/LoadingActions'

/**    var  */
const INITIAL_STATE = {
  loading: { show: false }
}

/*
 * loading reducer
 * @params {object} state
 * @params {object} action
 * @return {object}
 * */
const LoadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /*
       * LOADING
       *
       * */
    case SHOW_LOADING:
      return { ...state, loading: { show: true } }
    case HIDE_LOADING:
      return { ...state, loading: { show: false } }

    default:
      return state
  }
}
/**    export  */
export default LoadingReducer
