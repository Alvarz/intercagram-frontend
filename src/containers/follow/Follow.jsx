import React from 'react'
import { connect } from 'react-redux'
import './css/Follow.scss'
import FollowCtrl from './js/FollowCtrl'
import FollowList from '../../components/followList/FollowList'
import to from '../../utils/to'
import {
  fetchFollowers, fetchFollowersSuccess, fetchFollowersFailure,
  fetchFollowing, fetchFollowingSuccess, fetchFollowingFailure,
  isFollower
} from '../../actions/FollowActions'

class Follow extends FollowCtrl {
  /*
   * the method render is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#render
   * */
  render () {
    if (!this.followList) { return null }
    return (
      <div className='col-12 margin-bottom-50 margin-top-10'>
        <FollowList followList={this.followList} />
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
    followers: state.FollowReducer.follow.followers,
    following: state.FollowReducer.follow.following
  }
}

/*
 * map dispatch to props
 * @param {function} dispatch
 * @return {object}
 */
const mapDispatchToProps = (dispatch) => {
  return {
    /*
     * fetch the followers users of given id
     * @param {number} id
     * @return {void}
     */
    fetchFollowers: async (id) => {
      const [err, resp] = await to(dispatch(fetchFollowers(id)).payload)
      if (err) {
        dispatch(fetchFollowersFailure(err, resp))
      }
      dispatch(fetchFollowersSuccess(resp.docs))
    },

    /*
     * fetch the following users by the given id
     * @param {number} id
     * @return {void}
     */
    fetchFollowing: async (id) => {
      const [err, resp] = await to(dispatch(fetchFollowing(id)).payload)
      if (err) {
        dispatch(fetchFollowingFailure(err, resp))
      }
      dispatch(fetchFollowingSuccess(resp.docs))
    },
    /*
     * set the follow type
     * @param {boolean} boolean
     * @return {void}
     */
    setFollowType: async (boolean) => {
      dispatch(isFollower(boolean))
    }
  }
}
/** class exporter with redux connect */
export default connect(mapStateToProps, mapDispatchToProps)(Follow)
