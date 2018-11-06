import React from 'react'
import './css/UploadForm.scss'
import UploadFormCtrl from './js/UploadFormCtrl'

export default class UploadForm extends UploadFormCtrl {
  render () {
    return (
      <form className='form-inline'>
        <div className='form-group'>
          <label htmlFor='exampleFormControlFile1'>Picture</label>
          <input type='file' className='form-control-file' id='exampleFormControlFile1' />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleFormControlTextarea1'>Description</label>
          <textarea className='form-control' id='exampleFormControlTextarea1' rows='3' />
        </div>
        <button type='submit' className='form-search-btn btn btn-outline-primary btn-sm mb-2'><i className='fa fa-lg fa-search' /></button>
      </form>
    )
  }
}
