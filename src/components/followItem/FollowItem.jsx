import React from 'react'
import './css/FollowItem.scss'
import { connect } from 'react-redux'
import to from '../../utils/to'
import FollowItemCtrl from './js/FollowItemCtrl'
import { Link } from 'react-router-dom'
import {
  postFollow, postFollowSuccess, postFollowFailure,
  removeFollow, removeFollowSuccess, removeFollowFailure
} from '../../actions/FollowActions'

class FollowItem extends FollowItemCtrl {
  /*
   * the follow button
   * @return {html}
   */
  btnFollow () {
    return (<button onClick={(e) => this.follow(e, this.user)} type='button' className='btn btn-outline-primary btn-lg'>Follow</button>)
  }

  /*
   * the unfollow button
   * @return {html}
   */
  btnUnFollow () {
    return (<button onClick={(e) => this.unfollow(e, this.user)} type='button' className='btn btn-primary btn-lg'>Following</button>)
  }

  /*
   * follow unfollow renderer
   * @return {html}
   */
  renderFollowBtn () {
    if (this.props.me._id !== this.user._id) {
      if (this.user.wasFollowedByUser) { return this.btnUnFollow() } else { return this.btnFollow() }
    }

    return (<button className='btn btn-outline-primary disabled btn-lg' disabled>It's you!</button>)
  }

  /*
   * react life cycle method
   * @see https://reactjs.org/docs/react-component.html#render
   * */
  render () {
    return (
      <div className='row'>
        <div className='followItem-thumbnail-container' >
          <Link className='' to={`/profile/${this.user._id}`} >
            <img className='rounded-circle thumb-followItem img-thumbnail' src={this.user.profilePic} alt='profile pic' />
          </Link>
        </div>
        <div className='col-6 align-left padding-top-10'>
          <span>{this.user.nickname}</span>
        </div>
        <div className='col-4 align-right'>
          {this.renderFollowBtn()}
        </div>
      </div>
    )
  }
}
/*
 * map state to props
 * @param {object} state
 * @return {object}
 */
const mapStateToProps = (state) => {
  return {
    isFollower: state.FollowReducer.isFollower,
    me: state.UserReducer.me.user
  }
}

/*
 * map dispatch to props
 * @param {Function} dispatch
 * @return {void}
 */
const mapDispatchToProps = (dispatch) => {
  return {
    /*
     * post follow
     * @async
     * @param {object} user
     * @return {void}
     */
    postFollow: async (user) => {
      const [err, resp] = await to(dispatch(postFollow(user)).payload)
      if (err || !resp) {
        dispatch(postFollowFailure(err, resp))
        return
      }
      dispatch(postFollowSuccess(resp))
    },
    /*
     * remove follow
     * @async
     * @param {object} user
     * @return {void}
     */
    removeFollow: async (user) => {
      const [err, resp] = await to(dispatch(removeFollow(user)).payload)
      if (err) {
        dispatch(removeFollowFailure(err, resp))
        return
      }
      dispatch(removeFollowSuccess(resp))
    }
  }
}
/**  class exporter with redux connect */
export default connect(mapStateToProps, mapDispatchToProps)(FollowItem)
