import React from 'react'
import './css/PicGallery.scss'
import PicGalleryCtrl from './js/PicGalleryCtrl'
import Pic from '../pic/Pic'

export default class PicGallery extends PicGalleryCtrl {
  constructor (props) {
    super(props)
    this.pic = this.props.pic
    this.class = this.props.class || 'col'
    this.withDesction = this.props.withDescription
    console.log('this.withDesction', this.withDesction)
  }

  render () {
    return (
      <li key={this.pic.id} id={this.pic.id} className={this.class}>
        <Pic pic={this.pic} withDescription={this.withDescription} />
      </li>
    )
  }
}
