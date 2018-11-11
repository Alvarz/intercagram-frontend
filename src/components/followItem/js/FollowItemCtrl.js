import { Component } from 'react'

export default class FollowItemCtrl extends Component {
  /*
   *  constructor of class
   * @see https://reactjs.org/docs/react-component.html#constructor
   *
   * */
  constructor (props) {
    super(props)
    this.user = (this.props.isFollower) ? this.props.followItem.follower : this.props.followItem.followed
  }

  /*
   * unfollow the user
   * @param {object} user
   * @param {object} e
   * @return {void}
   * */
  unfollow (e, user) {
    e.preventDefault()
    this.props.removeFollow(user)
    this.user.wasFollowedByUser = false
    this.forceUpdate()
  }
  /*
   * follow the user
   * @param {object} user
   * @param {object} e
   * @return {void}
   * */
  follow (e, user) {
    e.preventDefault()
    this.props.postFollow(user)
    this.user.wasFollowedByUser = true
    this.forceUpdate()
  }
}
