import { Component } from 'react'

export default class UserProfileCtrl extends Component {
  /*
 *
 *
 * */
  unfollow (e, user) {
    e.preventDefault()
    this.props.removeFollow(user)
    this.user.wasFollowedByUser = false
    console.log('unfollow')
  }
  /*
 *
 *
 * */
  follow (e, user) {
    e.preventDefault()
    this.props.postFollow(user)
    this.user.wasFollowedByUser = true
    console.log('follow')
  }
}
