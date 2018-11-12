import Pic from '../models/Pic'

export const UPLOAD = 'UPLOAD'
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS'
export const UPLOAD_FAILURE = 'UPLOAD_FAILEDURE'
export const UPLOAD_RESULT = 'UPLOAD_RESULT'
export const SHOW_IT = 'SHOW_IT'

/*
 *  action to show the image on preview
 * @return {object}
 * */
export function showIt (image) {
  return {
    type: SHOW_IT,
    payload: image
  }
}

/*
 *  fetch likes
 * @return {object}
 * */
export function upload (pic) {
  const picInstance = new Pic()

  return {
    type: UPLOAD,
    payload: picInstance.upload(pic)
  }
}

/*
 *  on success
 * @params {array} pics
 * @return {object}
 * */
export function uploadSuccess (pic) {
  return {
    type: UPLOAD_SUCCESS,
    payload: pic
  }
}

/*
 *  on error
 * @params {object} error
 * @return {object}
 * */
export function uploadFailure (err, resp) {
  const error = err
  return {
    type: UPLOAD_FAILURE,
    payload: error
  }
}
