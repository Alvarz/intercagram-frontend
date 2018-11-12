/**    var  */
import {
  UPLOAD, UPLOAD_SUCCESS, UPLOAD_FAILURE, SHOW_IT
} from '../actions/UploadActions'

/**    var  */
const INITIAL_STATE = {
  uploaded: { pic: [], error: null, loading: false },
  pic: ''

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
       * UPLOAD
       *
       * */
    case UPLOAD:
      return { ...state, uploaded: { pic: [], error: null, loading: true } }
    case UPLOAD_SUCCESS:
      return { ...state, uploaded: { pic: action.payload, error: null, loading: true } }
    case UPLOAD_FAILURE:
      error = action.payload /* || { message: action.payload.message }// 2nd one is network or server down errors- */
      return { ...state, uploaded: { pic: [], error: error, loading: false } }

    /*
       * SHOW
       *
       * */
    case SHOW_IT:
      return { ...state, pic: action.payload }

    default:
      return state
  }
}
/**    export  */
export default LikeReducer
