import React from 'react'
import { connect } from 'react-redux'
import './css/Profile.scss'
import to from '../../utils/to'
import ProfileCtrl from './js/ProfileCtrl'
import UserProfile from '../../components/userProfile/UserProfile'
import Gallery from '../../components/gallery/Gallery'
import {
  getUserSuccess, getUser, getUserFailure,
  fetchUserPicsSuccess, fetchUserPics, fetchUserPicsFailure

} from '../../actions/UsersActions'
/*
 * Profile class
 */
class Profile extends ProfileCtrl {
  /*
   * life cicle react's method
   */
  render () {
    this.user = this.props.user
    this.pics = this.props.pics
    if (this.user === undefined || Object.keys(this.user).length < 1) return null
    if (!this.pics.hasOwnProperty('docs')) return null
    return (
      <div className='margin-top-10 margin-bottom-50'>
        <div className='col-12'>
          <UserProfile user={this.user} />
        </div>
        <div className='col-12' >
          <Gallery pics={this.pics.docs} withDescription={this.description} />
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
    user: state.UserReducer.user.user,
    pics: state.UserReducer.picList.pics
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
     * get user of given id
     * @param {number} id
     * @return {void}
     * */
    getUser: async (id) => {
      let [err, user] = await to(dispatch(getUser(id)).payload)
      if (err) {
        dispatch(getUserFailure(err, user))
        return
      }
      dispatch(getUserSuccess(user))
    },

    /*
     * get fetch pics of given id
     * @param {number} id
     * @return {void}
     * */
    fetchUserPics: async (id) => {
      const [err, resp] = await to(dispatch(fetchUserPics(id)).payload)
      if (err || !resp) {
        dispatch(fetchUserPicsFailure(err, resp))
        return
      }
      dispatch(fetchUserPicsSuccess(resp))
    }
  }
}
/** export class with redux connect */
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
