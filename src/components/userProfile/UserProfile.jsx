import React from 'react'
import './css/UserProfile.scss'
import UserProfileCtrl from './js/UserProfileCtrl'

export default class UserProfile extends UserProfileCtrl {
  constructor (props) {
    super(props)

    this.user = this.props.user
  }

  render () {
    return (
      <section>
        <div className='row'>
          <div className='col-12' >
            <img src='https://via.placeholder.com/450' alt='profile_pic' />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm information'>
            <h3>{this.user.username}</h3>
            <span>{`${this.user.name} ${this.user.lastname}`} </span>
          </div>
          <div className='col'>
            <button className='btn btn-primary'>Follow</button>
          </div>
          <div className='col-12'>
            {this.user.description}
          </div>
        </div>
      </section>
    )
  }
}
