import React from 'react'
import './css/FollowItem.scss'
import FollowItemCtrl from './js/FollowItemCtrl'
import { Link } from 'react-router-dom'

export default class FollowItem extends FollowItemCtrl {
  constructor (props) {
    super(props)

    this.followItem = this.props.followItem
  }

  render () {
    return (
      <div className='row'>
        <div className='followItem-thumbnail-container' >
          <Link className='' to={`/profile/${this.followItem.user.id}`} >
            <img className='rounded-circle thumb-followItem img-thumbnail' src='https://image.shutterstock.com/image-vector/female-profile-picture-placeholder-vector-260nw-450966937.jpg' alt='alt' />
          </Link>
        </div>
        <div className='followItem-textbox col'>
          <div className='row'>
            <div className='col-12 align-left'>
              <span>{this.followItem.user.username}</span>
            </div>
            <div className='col-12 align-left'>
              <button type='button' className='btn btn-sm btn-primary'>Follow</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
