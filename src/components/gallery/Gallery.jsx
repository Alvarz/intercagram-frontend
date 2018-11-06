import React from 'react'
import './css/Gallery.scss'
import GalleryCtrl from './js/GalleryCtrl'
import PicGallery from '../../components/picGallery/PicGallery'

export default class Gallery extends GalleryCtrl {
  constructor (props) {
    super(props)

    this.user = this.props.user
    this.pics = this.props.pics
    this.withDesction = this.props.withDescription
  }

  render () {
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
