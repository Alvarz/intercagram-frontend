import React from 'react'
import './css/Upload.scss'
import UploadCtrl from './js/UploadCtrl'
import UploadForm from '../../components/uploadForm/UploadForm'
import UploadPic from '../../components/uploadPic/UploadPic'
/*
 * @class Upload
 */
export default class Upload extends UploadCtrl {
  /*
   * the method render is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#render
   * */
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
