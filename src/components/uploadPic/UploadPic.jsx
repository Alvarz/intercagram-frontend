import React from 'react'
import './css/UploadPic.scss'
import UploadPicCtrl from './js/UploadPicCtrl'
import { withRouter } from 'react-router-dom'
import to from '../../utils/to'
import { upload, uploadSuccess, uploadFailure } from '../../actions/UploadActions'
import { connect } from 'react-redux'

class UploadPic extends UploadPicCtrl {
  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  render () {
    return (
      <div className='row '>
        <div className='col-12'>
          <img src={this.pic.image} alt='image_' />
        </div>
        <label htmlFor='exampleFormControlTextarea1'>Description</label>
        <textarea value={this.state.description} onChange={this.handleChangeDescription} className='form-control' id='description' name='description' rows='3' />
        <div className='col-12 margin-top-10 margin-bottom-50'>
          <button onClick={this.handlePublishClick} type='button' className='btn btn-outline-primary btn-lg '>Publish</button>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    pic: state.UploadReducer.pic
  }
}

/*
 * mamp dispatch to props
 * @param {function} dispatch
 * @return {void}
 */
const mapDispatchToProps = (dispatch) => {
  return {
    upload: async (pic) => {
      const [err, resp] = await to(dispatch(upload(pic)).payload)
      if (err || !resp) {
        dispatch(uploadFailure(err, resp))
        return
      }
      dispatch(uploadSuccess(resp))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadPic))
