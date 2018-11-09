import { Component } from 'react'

export default class PicCtrl extends Component {
  /*
 *
 *
 * */
  unlike (e, pic) {
    e.preventDefault()
    this.props.removeLike(pic)
    this.pic.wasLikedByUser = false
    this.pic.likes--
    console.log('unlike')
  }
  /*
 *
 *
 * */
  like (e, pic) {
    e.preventDefault()
    this.props.postLike(pic)
    this.pic.wasLikedByUser = true
    this.pic.likes++
    console.log('like')
  }
}
