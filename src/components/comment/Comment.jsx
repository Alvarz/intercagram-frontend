import React from 'react'
import './css/Comment.scss'
import CommentCtrl from './js/CommentCtrl'
import { Link } from 'react-router-dom'

export default class Comment extends CommentCtrl {
  constructor (props) {
    super(props)

    this.comment = this.props.comment
  }

  render () {
    return (
      <div className='row'>
        <div className='comment-thumbnail-container' >
          <Link className='' to={`/profile/${this.comment.user}`} >
            <img className='rounded-circle thumb-comment img-thumbnail' src='https://image.shutterstock.com/image-vector/female-profile-picture-placeholder-vector-260nw-450966937.jpg' alt='alt' />
          </Link>
        </div>
        <div className='comment-textbox col'>
          <div className='row'>
            <div className='col-12 align-left'>
              <span>{this.comment.user.name}</span>
            </div>
            <div className='col-12 align-left'>
              {this.comment.description}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
