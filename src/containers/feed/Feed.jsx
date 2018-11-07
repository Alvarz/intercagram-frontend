import React from 'react'
import { connect } from 'react-redux'
import './css/Feed.scss'
import FeedCtrl from './js/FeedCtrl'
import { fetchPics, fetchPicsSuccess, fetchPicsFailure } from '../../actions/PicsActions'
import PicGallery from '../../components/picGallery/PicGallery'
/*
 * Feed class
 */
class Feed extends FeedCtrl {
  /*
   * life cicle react's method
   */
  render () {
    this.picsList = this.props.picsList
    if (this.picsList === undefined || this.picsList.length < 1) { return null }

    return (
      <ul className='margin-bottom-50 margin-top-10'>
        {this.picsList.map((pic, key) => {
          return (<PicGallery key={key} pic={pic} withDescription />)
        })
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    picsList: state.PicReducer.picsList.pics
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPics: async () => {
      const resp = await dispatch(fetchPics()).payload
      dispatch(fetchPicsSuccess(resp.docs))
      //! resp.bool ? dispatch(fetchPicsSuccess(resp.docs)) : dispatch(fetchPicsFailure(resp.docs))
      /* dispatch(fetchPics()).then((response) => {
        !response.error ? dispatch(fetchPicsSuccess(response.payload.data)) : dispatch(fetchPicsFailure(response.payload.data))
      }) */
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
