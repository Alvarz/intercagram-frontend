
export const SHOW_LOADING = 'SHOW_LOADING'
export const HIDE_LOADING = 'HIDE_LOADING'

/*
 *  show alert
 * @params {object} pic
 * @return {object}
 * */
export function showLoading (data) {
  return {
    type: SHOW_LOADING,
    payload: data
  }
}

/*
 * hide alert
 * @return {object}
 * */
export function hideLoading () {
  return {
    type: HIDE_LOADING,
    payload: {}
  }
}
