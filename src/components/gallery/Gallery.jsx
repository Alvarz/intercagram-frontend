import React from 'react'
import './css/Gallery.scss'
import GalleryCtrl from './js/GalleryCtrl'
import PicGallery from '../../components/picGallery/PicGallery'

export default class Gallery extends GalleryCtrl {
  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor (props) {
    super(props)
    this.withDesction = this.props.withDescription
  }

  /*
   * the method render is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#render
   * */
  render () {
    this.pics = this.props.pics
    if (this.pics === undefined || this.pics.length < 1) { return null }
    return (
      <ul id='gallery' className='row'>
        {this.pics.map((pic, key) => {
          return (<PicGallery key={key} pic={pic} withDesction={this.withDesction} class='col-4 gallery-li' />)
        })
        }
      </ul>
    )
  }
}
