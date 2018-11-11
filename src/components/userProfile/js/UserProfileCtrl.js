import { Component } from 'react'

export default class UserProfileCtrl extends Component {
  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor (props) {
    super(props)
    this.user = this.props.user
    this.profilePic = (this.user.profilePic) ? this.user.profilePic : 'https://via.placeholder.com/450'
  }

  /*
   * this a life cycle react method
   * @see https://reactjs.org/docs/react-component.html#shouldcomponentupdate
   * */
  shouldComponentUpdate (nextProps, nextState) {
    return (this.props !== nextProps)
  }
  /*
   * unfollow a user
   * @param {object} e
   * @param {object} user
   * @return {void}
   * */
  unfollow (e, user) {
    e.preventDefault()
    this.props.removeFollow(user)
    this.user.wasFollowedByUser = false
    this.user.followers.pop()
    console.log('unfollow')
    console.log(this.user.followers.length)
    this.forceUpdate()
  }
  /*
   * follow a user
   * @param {object} e
   * @param {object} user
   * @return {void}
   * */
  follow (e, user) {
    e.preventDefault()
    this.props.postFollow(user)
    this.user.wasFollowedByUser = true
    console.log('follow')
    this.user.followers.push({})
    this.forceUpdate()
  }
}
