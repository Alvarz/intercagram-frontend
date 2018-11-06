import React from 'react'
import './css/Upload.scss'
import UploadCtrl from './js/UploadCtrl'
import UploadForm from '../../components/uploadForm/UploadForm'
import UploadPic from '../../components/uploadPic/UploadPic'
/*
 * Upload class
 */
export default class Upload extends UploadCtrl {
  /*
   * life cicle react's method
   */
  render () {
    return (
      <div className='margin-top-10 margin-bottom-50'>
        <div className='col-12' >
          <UploadForm />
        </div>
        <div className='col-12' >
          <UploadPic />
        </div>
      </div>
    )
  }
}
