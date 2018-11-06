import React from 'react'
import './css/UploadPic.scss'
import UploadPicCtrl from './js/UploadPicCtrl'

export default class UploadPic extends UploadPicCtrl {
  render () {
    return (
      <div className='row '>
        <div className='col-12'>
          <img src='https://via.placeholder.com/450' alt='image_' />
        </div>
        <div className='col-12 margin-top-10 margin-bottom-50'>
          <button type='button' className='btn btn-outline-primary btn-lg '>Publish</button>
        </div>
      </div>

    )
  }
}
