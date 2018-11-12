import React from 'react'
import './css/UploadForm.scss'
import UploadFormCtrl from './js/UploadFormCtrl'
import { connect } from 'react-redux'
import { showIt } from '../../actions/UploadActions'
import { withRouter } from 'react-router-dom'
class UploadForm extends UploadFormCtrl {
  /*
   * the method render is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#render
   * */
  render () {
    return (
      <form className='form-inline margin-bottom-20' onSubmit={this.handleSubmit} encType='multipart/form-data'>
        <div className='row full-width'>
          <div className='col'>
            <label htmlFor='file'>Select picture</label>
            <input type='file' value={this.state.file} onChange={this.handleChangeFile} className='form-control-file' id='file' name='file' />
          </div>
          <div className='col'>
            <button type='submit' className='form-upload-btn btn btn-outline-primary'><i className='fas fa-file-upload' /></button>
          </div>
        </div>
      </form>
    )
  }
}

/*
 * mamp dispatch to props
 * @param {function} dispatch
 * @return {void}
 */
const mapDispatchToProps = (dispatch) => {
  return {
    showIt: (image) => {
      dispatch(showIt(image))
    }
  }
}
/** class exporter with redux connect */
export default withRouter(connect(null, mapDispatchToProps)(UploadForm))
