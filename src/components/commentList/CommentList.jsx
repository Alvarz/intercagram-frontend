import React from 'react'
import './css/CommentList.scss'
import CommentListCtrl from './js/CommentListCtrl'

import Comment from '../comment/Comment'

export default class CommentList extends CommentListCtrl {
  
  /*
   * constructor
   *
   * */
  constructor (props) {
    super(props)

    this.comments = this.props.comments
  }

  /*
   * render
   *
   * */
  render () {
    return (
      <section>
        <ul className='list-group'>
          {this.comments.map((comment, key) => {
            return (<li className='list-group-item' key={key}>
              <Comment comment={comment} />
            </li>)
          })
          }
        </ul>
      </section>
    )
  }
}
