
import Comment from '../models/Comment'

export const FETCH_COMMENT = 'FETCH_COMMENT'
export const FETCH_COMMENT_SUCCESS = 'FETCH_COMMENT_SUCCESS'
export const FETCH_COMMENT_FAILURE = 'FETCH_COMMENT_FAILEDURE'

export const POST_COMMENT = 'POST_COMMENT'
export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS'
export const POST_COMMENT_FAILURE = 'POST_COMMENT_FAILEDURE'

export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS'
export const REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILEDURE'

export const SHOW_COMMENT_BOX = 'SHOW_COMMENT_COMMENT_BOX'
export const HIDE_COMMENT_BOX = 'HIDE_COMMENT_COMMENT_BOX'

/*
 * snow modal
 * @return {void}
 * */
export function showCommentBox (pic) {
  return {
    type: SHOW_COMMENT_BOX,
    payload: pic
  }
}

/*
 * hide modal
 * @return {void}
 * */
export function hideCommentBox (pic) {
  return {
    type: HIDE_COMMENT_BOX,
    payload: pic
  }
}

/*
 *  give like to a pic|
 * @params {object} pic
 * @return {object}
 * */
export function postComment (comm) {
  const comment = new Comment()

  return {
    type: FETCH_COMMENT,
    payload: comment.post(comm)
  }
}

/*
 * on sucess
 * @return {object}
 * */
export function postCommentSuccess () {
  return {
    type: FETCH_COMMENT_SUCCESS,
    payload: {}
  }
}

/*
 *  on error
 * @params {object} error
 * @return {object}
 * */
export function postCommentFailure (err, resp) {
  const error = err || resp.error
  console.warn(error)

  return {
    type: FETCH_COMMENT_FAILURE,
    payload: error
  }
}
/*
 *  fetch comments
 * @return {object}
 * */
export function fetchComment () {
  const comment = new Comment()

  return {
    type: FETCH_COMMENT,
    payload: comment.fetchComment()
  }
}

/*
 *  on success
 * @params {array} pics
 * @return {object}
 * */
export function fetchCommentSuccess (comments) {
  return {
    type: FETCH_COMMENT_SUCCESS,
    payload: comments
  }
}

/*
 *  on error
 * @params {object} error
 * @return {object}
 * */
export function fetchCommentFailure (err, resp) {
  const error = err || resp.error
  console.warn(error)

  return {
    type: FETCH_COMMENT_FAILURE,
    payload: error
  }
}

/*
 *  unlike
 * @params {object} pic
 * @return {object}
 * */
export function removeComment (com) {
  const comment = new Comment()

  return {
    type: REMOVE_COMMENT,
    payload: comment.remove(com._id)
  }
}

/*
 *  on success
 * @params {object} data
 * @return {object}
 * */
export function removeCommentSuccess (data) {
  return {
    type: REMOVE_COMMENT_SUCCESS,
    payload: data
  }
}

/*
 *  on error
 * @params {object} data
 * @return {object}
 * */
export function removeCommentFailure (err, resp) {
  const error = err || resp.error
  return {
    type: REMOVE_COMMENT_FAILURE,
    payload: error
  }
}
