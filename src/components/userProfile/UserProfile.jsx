import React from 'react'
import { connect } from 'react-redux'
import './css/UserProfile.scss'
import to from '../../utils/to'
import UserProfileCtrl from './js/UserProfileCtrl'
import { Link } from 'react-router-dom'
import {
  postFollow, postFollowSuccess, postFollowFailure,
  removeFollow, removeFollowSuccess, removeFollowFailure
} from '../../actions/FollowActions'

class UserProfile extends UserProfileCtrl {
  /*
   * follow btn renderer
   * @return {html{}
   * */
  btnFollow () {
    return (<button onClick={(e) => this.follow(e, this.user)} type='button' className='btn btn-outline-primary btn-lg'>Follow</button>)
  }

  /*
   * unfollow btn renderer
   * @return {html{}
   * */
  btnUnFollow () {
    return (<button onClick={(e) => this.unfollow(e, this.user)} type='button' className='btn btn-primary btn-lg'>Following</button>)
  }

  /*
   * pick the proper btn
   * @return {html{}
   * */
  renderFollowBtn () {
    if (this.props.me._id !== this.user._id) {
      if (this.user.wasFollowedByUser) { return this.btnUnFollow() } else { return this.btnFollow() }
    }
    return (<button className='btn btn-outline-primary disabled btn-lg' disabled>It's you!</button>)
  }

  /*
   * the method render is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#render
   * */
  render () {
    return (
      <div className='row'>
        <div className='avatar' >
          <img className='img-thumbnail avatar-md avatar rounded-circle' src={this.profilePic} alt='profile_pic' />
        </div>
        <div className='col information'>
          <div className='row'>
            <div className='align-left col-6 d-none d-md-block'>
              <ul>
                <li><h3>{this.user.nickname}</h3></li>
                <li><span>{`${this.user.name} ${this.user.lastname}`} </span></li>
              </ul>
            </div>
            <div className='col-md-6'>
              <ul className='row '>
                <li className='col'>
                  <Link to={`/followers/${this.user._id}`}>
                    <span className='br'>{this.user.followers.length} </span>
                    <small>followers</small>
                  </Link>
                </li>
                <li className='col'>
                  <Link to={`/following/${this.user._id}`}>
                    <span className='br'> {this.user.following.length} </span>
                    <small>following</small>
                  </Link>
                </li>
              </ul>
              {this.renderFollowBtn()}
            </div>
            <div className='w-100' />
            <div className='align-left col-12 d-none d-md-block'>
              {this.user.description}
            </div>
          </div>
        </div>
        <div className='col-12 d-block d-md-none d-lg-none'>
          <div className='row'>
            <div className='align-left col-12'>
              <ul>
                <li><h3>{this.user.username}</h3></li>
                <li><span>{`${this.user.name} ${this.user.lastname}`} </span></li>
              </ul>
            </div>
            <div className='align-left col-12'>
              {this.user.description}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
/*
 * map state to props
 * @param {object} state
 * @return {object}
 **/
const mapStateToProps = (state) => {
  return {
    me: state.UserReducer.me.user
  }
}

/*
 * map dispatch to props
 * @param {function} dispatch
 * @return {void}
 **/
const mapDispatchToProps = (dispatch) => {
  return {
    /*
     * follow a user
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
     * unfollow a user
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
/** class exporter with redux connect */
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
