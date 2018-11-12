/**    var  */
import { SHOW_ALERT, HIDE_ALERT } from '../actions/AlertActions'

/**    var  */
const INITIAL_STATE = {
  alert: { type: '', data: {}, show: false }
}

/*
 * like reducer
 * @params {object} state
 * @params {object} action
 * @return {object}
 * */
const AlertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /*
       * ALERT
       *
       * */
    case SHOW_ALERT:
      return { ...state, alert: action.payload }
    case HIDE_ALERT:
      return { ...state, alert: { type: '', data: {}, show: false } }

    default:
      return state
  }
}
/**    export  */
export default AlertReducer
