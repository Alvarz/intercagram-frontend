import React from 'react'
import './css/Pic.scss'
import PicCtrl from './js/PicCtrl'
import { Link } from 'react-router-dom'

export default class PicGallery extends PicCtrl {
  constructor (props) {
    super(props)
    this.pic = this.props.pic

    this.withDescription = this.props.withDescription
  }

  render () {
    let description, topDescription
    if (this.withDescription) {
      topDescription = (
        <div className='row'>
          <div className='col'>
            <div className='comment-thumbnail-container' >
              <Link className='' to={`/profile/${this.pic.user.id}`} >
                <img className='rounded-circle thumb-comment img-thumbnail' src='https://image.shutterstock.com/image-vector/female-profile-picture-placeholder-vector-260nw-450966937.jpg' alt='alt' />
              </Link>
            </div>
            <div className='col comment-textbox'>
              <div className='row'>
                <div className='col-12 align-left'>
                  <span>{this.pic.user.username}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )

      description = (
        <div className='description margin-bottom-20 '>
          <ul className='row'>
            <li className='col'>likes <span className='badge badge-light'>{this.pic.likes}</span></li>
            <li className='col'>Comments <span className='badge badge-light'>{this.pic.commentsQty}</span></li>
          </ul>
          <p>{this.pic.description }</p>
        </div>
      )
    }

    return (
      <section>
        {topDescription}
        <div className='image margin-top-5'>
          <Link to={`/pic/${this.pic.id}`}>
            <img src={this.pic.url} alt='image' />
          </Link>
        </div>
        {description}
      </section>
    )
  }
}
