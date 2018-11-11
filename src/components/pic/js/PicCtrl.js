import { Component } from 'react'

export default class PicCtrl extends Component {
  /*
   * unlike a pic
   * @param {object} e
   * @param {object} pic
   * @return {void}
   * */
  unlike (e, pic) {
    e.preventDefault()
    this.props.removeLike(pic)
    this.pic.wasLikedByUser = false
    this.pic.likes--
    console.log('unlike')
  }
  /*
   * like a pic
   * @param {object} e
   * @param {object} pic
   * @return {void}
   * */
  like (e, pic) {
    e.preventDefault()
    this.props.postLike(pic)
    this.pic.wasLikedByUser = true
    this.pic.likes++
    console.log('like')
  }

  /*
   * comment a pic
   * @param {object} e
   * @param {object} pic
   * @return {void}
   * */
  leaveComment (e, pic) {
    e.preventDefault()
    const comment = {
      pic: pic._id,
      description: 'this is a comment leaved by the API'
    }
    this.props.postComment(comment)
    console.log('open modal oir active  box to leave a comment')
  }
}
