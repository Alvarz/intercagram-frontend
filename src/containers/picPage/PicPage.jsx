import React from 'react'
import './css/PicPage.scss'
import PicPageCtrl from './js/PicPageCtrl'
import Pic from '../../components/pic/Pic'
import CommentList from '../../components/commentList/CommentList'
// <Route path="/pic/:picId"   component={  } />
export default class PicPage extends PicPageCtrl {
  constructor (props) {
    super(props)

    this.id = this.props.match.params.id
    this.pic = {
      id: this.id,
      url: 'https://via.placeholder.com/450',
      description: 'loren ipsum',
      likes: 12,
      commentsQty: 6,
      user: {
        id: 1,
        name: 'jane',
        lastname: 'doe',
        username: 'therealjanedoe'
      }

    }

    this.commentList = []

    this.comment = {
      description: 'the description',
      user: {
        id: 1,
        name: 'john',
        lastname: 'doe',
        username: 'thecreatejohndoe',
        email: 'joendie@example.com'
      }
    }
    for (let i = 0; i < 6; i++) {
      this.commentList.push(this.comment)
    }
  }
  render () {
    return (
      <div className='container'>
        <Pic pic={this.pic} />
        <CommentList comments={this.commentList} />
      </div>
    )
  }
}
