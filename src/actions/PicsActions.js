
import Pic from '../models/Pic'

export const GET_PIC = 'GET_PIC'
export const GET_PIC_SUCCESS = 'GET_PIC_SUCCESS'
export const GET_PIC_FAILURE = 'GET_PIC_FAILEDURE'

export const FETCH_PICS = 'FETCH_PICS'
export const FETCH_PICS_SUCCESS = 'FETCH_PICS_SUCCESS'
export const FETCH_PICS_FAILURE = 'FETCH_PICS_FAILEDURE'

/*
 *
 *
 * */
export function getPic (id) {
  const pic = new Pic()

  return {
    type: GET_PIC,
    payload: pic.get(id)
  }
}

/*
 *
 *
 * */
export function getPicSuccess (pic) {
  return {
    type: GET_PIC_SUCCESS,
    payload: pic
  }
}

/*
 *
 *
 * */
export function getPicFailure (error) {
  return {
    type: GET_PIC_FAILURE,
    payload: error
  }
}

/*
 *
 *
 * */
export function fetchPics () {
  const pic = new Pic()

  return {
    type: FETCH_PICS,
    payload: pic.fetch()
  }
}

/*
 *
 *
 * */
export function fetchPicsSuccess (pics) {
  return {
    type: FETCH_PICS_SUCCESS,
    payload: pics
  }
}

/*
 *
 *
 * */
export function fetchPicsFailure (error) {
  return {
    type: FETCH_PICS_FAILURE,
    payload: error
  }
}
