
export const SHOW_ALERT = 'SHOW_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'

/*
 *  show alert
 * @params {object} pic
 * @return {object}
 * */
export function showAlert (data) {
  return {
    type: SHOW_ALERT,
    payload: data
  }
}

/*
 * hide alert
 * @return {object}
 * */
export function hideAlert () {
  return {
    type: HIDE_ALERT,
    payload: {}
  }
}
