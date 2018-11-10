
/**    var  */
import { FETCH_PICS, FETCH_PICS_SUCCESS, FETCH_PICS_FAILURE, GET_PIC, GET_PIC_SUCCESS, GET_PIC_FAILURE } from '../actions/PicsActions'

/**    var  */
const INITIAL_STATE = {
  picsList: { pics: [], error: null, loading: false },
  pic: { pic: {}, error: null, loading: false }

}

/*
 * pic reducer
 * @params {object} state
 * @params {object} action
 * @return {object}
 * */
const PicReducer = (state = INITIAL_STATE, action) => {
  let error

  switch (action.type) {
    /*
       * FETCH
       *
       * */
    case FETCH_PICS:
      return { ...state, picsList: { pics: [], error: null, loading: true } }
    case FETCH_PICS_SUCCESS:
      return { ...state, picsList: { pics: action.payload, error: null, loading: true } }
    case FETCH_PICS_FAILURE:
      error = action.payload || { message: action.payload.message }// 2nd one is network or server down errors
      return { ...state, picsList: { pics: [], error: error, loading: false } }

      /*
       * GET
       *
       * */
    case GET_PIC:
      return { ...state, pic: { pic: {}, error: null, loading: true } }
    case GET_PIC_SUCCESS:
      return { ...state, pic: { pic: action.payload, error: null, loading: true } }
    case GET_PIC_FAILURE:
      error = action.payload || { message: action.payload.message }// 2nd one is network or server down errors
      return { ...state, pic: { pic: {}, error: error, loading: false } }
    default:
      return state
  }
}
/**    export  */
export default PicReducer
