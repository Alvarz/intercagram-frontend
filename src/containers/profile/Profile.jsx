import React from 'react'
import { connect } from 'react-redux'
import './css/Profile.scss'
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
  constructor (props) {
    super(props)

    this.pics = []

    /*   this.user = {
      id: 1,
      name: 'Jane',
      lastname: 'Doe',
      email: 'jane@jane.com',
      username: 'therealjanedoe',
      description: 'this is the cool me'
    }

    this.pic = {
      id: 0,
      url: 'https://via.placeholder.com/450',
      description: 'loren ipsum',
      likes: 12,
      commentsQty: 6,
      user: this.user
    }
    for (let i = 1; i < 20; i++) {
      this.pic.id = i
      this.pics.push(this.pic)
    }

    this.description = false */
  }
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

const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user.user,
    pics: state.UserReducer.picList.pics
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: async (id) => {
      try {
        const user = await dispatch(getUser(id)).payload
        dispatch(getUserSuccess(user))
      } catch (err) {
        dispatch(getUserFailure(err))
      }
    },
    fetchUserPics: async (id) => {
      try {
        const resp = await dispatch(fetchUserPics(id)).payload
        dispatch(fetchUserPicsSuccess(resp))
      } catch (err) {
        dispatch(fetchUserPicsFailure(err))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
