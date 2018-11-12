import { Component } from 'react'

import { followType } from '../../../actions/FollowActions'

/*
 * @class FollowCtrl
 * */
export default class FollowCtrl extends Component {
  /*
   * componnent did mount
   * @see https://reactjs.org/docs/react-component.html#componentdidmount
   * */
  componentDidMount () {
    this.handler()
  }

  /*
   * event handler
   * @async
   * @return {void}
   */
  async handler () {
    this.id = this.props.match.params.userId
    const url = this.props.match.path

    const isFollower = new RegExp('(followers)').test(String(url))
    if (isFollower) {
      await this.props.fetchFollowers(this.id)
      this.followList = this.props.followers
    } else {
      await this.props.fetchFollowing(this.id)
      this.followList = this.props.following
    }

    this.props.setFollowType(isFollower)
    this.forceUpdate()
  }
}
