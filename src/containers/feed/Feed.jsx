import React from 'react'
import './css/Feed.scss'
import FeedCtrl from './js/FeedCtrl'
import PicGallery from '../../components/picGallery/PicGallery'
/*
 * Feed class
 */
export default class Feed extends FeedCtrl {
  constructor () {
    super()

    this.pics = []

    this.pic = {
      id: 0,
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
    for (let i = 1; i < 20; i++) {
      this.pic.id = i
      this.pics.push(this.pic)
    }
  }
  /*
   * life cicle react's method
   */
  render () {
    return (
      <ul className=''>
        {this.pics.map((pic, key) => {
          return (<PicGallery key={key} pic={pic} />)
        })
        }
      </ul>
    )
  }
}
