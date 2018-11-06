import React from 'react'
import './css/UserProfile.scss'
import UserProfileCtrl from './js/UserProfileCtrl'
import { Link } from 'react-router-dom'

export default class UserProfile extends UserProfileCtrl {
  constructor (props) {
    super(props)

    this.user = this.props.user
  }

  render () {
    return (
      <div className='row'>
        <div className='avatar' >
          <img className='img-thumbnail avatar-md avatar rounded-circle' src='https://via.placeholder.com/450' alt='profile_pic' />
        </div>
        <div className='col information'>
          <div className='row'>
            <div className='align-left col-6 d-none d-md-block'>
              <ul>
                <li><h3>{this.user.username}</h3></li>
                <li><span>{`${this.user.name} ${this.user.lastname}`} </span></li>
              </ul>
            </div>
            <div className='col-md-6'>
              <ul className='row '>
                <li className='col'>
                  <a href='#gallery'>
                    <span className='br'>100 </span>
                    <small>published</small>
                  </a>
                </li>
                <li className='col'>
                  <Link to={`/followers/${this.user.id}`}>
                    <span className='br'>100 </span>
                    <small>followers</small>
                  </Link>
                </li>
                <li className='col'>
                  <Link to={`/following/${this.user.id}`}>
                    <span className='br'>100 </span>
                    <small>following</small>
                  </Link>
                </li>
              </ul>
              <button type='button' className='btn btn-outline-primary btn-lg'>Follow</button>
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
