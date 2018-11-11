import React from 'react'
import './css/PicGallery.scss'
import PicGalleryCtrl from './js/PicGalleryCtrl'
import Pic from '../pic/Pic'

export default class PicGallery extends PicGalleryCtrl {
  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor (props) {
    super(props)
    this.pic = this.props.pic
    this.class = this.props.class || 'col'
    this.withDescription = this.props.withDescription
  }

  /*
   * the method render is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#render
   * */
  render () {
    return (
      <li key={this.pic._id} id={this.pic._id} className={this.class}>
        <Pic pic={this.pic} withDescription={this.withDescription} />
      </li>
    )
  }
}
