import React from 'react'
import './css/Comment.scss'
import CommentCtrl from './js/CommentCtrl'
import { Link } from 'react-router-dom'

export default class Comment extends CommentCtrl {
  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor (props) {
    super(props)
    this.comment = this.props.comment
  }

  /*
   * the method render is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#render
   * */
  render () {
    return (
      <div className='row'>
        <div className='comment-thumbnail-container' >
          <Link className='' to={`/profile/${this.comment.user}`} >
            <img className='rounded-circle thumb-comment img-thumbnail' src={this.comment.user.picProfile} alt='alt' />
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
