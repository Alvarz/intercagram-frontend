
import Pic from '../models/Pic'

export const GET_PIC = 'GET_PIC'
export const GET_PIC_SUCCESS = 'GET_PIC_SUCCESS'
export const GET_PIC_FAILURE = 'GET_PIC_FAILEDURE'

export const FETCH_PICS = 'FETCH_PICS'
export const FETCH_PICS_SUCCESS = 'FETCH_PICS_SUCCESS'
export const FETCH_PICS_FAILURE = 'FETCH_PICS_FAILEDURE'

/*
 *  get a pic
 * @params {number} id
 * @return {object}
 * */
export function getPic (id) {
  const pic = new Pic()

  return {
    type: GET_PIC,
    payload: pic.get(id)
  }
}

/*
 *  on success
 * @params {object} pic
 * @return {object}
 * */
export function getPicSuccess (pic) {
  return {
    type: GET_PIC_SUCCESS,
    payload: pic
  }
}

/*
 *  on error
 * @params {object} error
 * @return {object}
 * */
export function getPicFailure (err, resp) {
  const error = err || resp.error
  return {
    type: GET_PIC_FAILURE,
    payload: error
  }
}

/*
 *  fetch pics
 * @return {object}
 * */
export function fetchPics (page = 1) {
  const pic = new Pic()

  return {
    type: FETCH_PICS,
    payload: pic.fetch(page)
  }
}

/*
 *  on success
 * @params {array} pics
 * @return {object}
 * */
export function fetchPicsSuccess (pics) {
  return {
    type: FETCH_PICS_SUCCESS,
    payload: pics
  }
}

/*
 *  on error
 * @params {object} error
 * @return {object}
 * */
export function fetchPicsFailure (err, resp) {
  const error = err || resp.error
  return {
    type: FETCH_PICS_FAILURE,
    payload: error
  }
}
