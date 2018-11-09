import React from 'react'
import { connect } from 'react-redux'
import './css/Feed.scss'
import FeedCtrl from './js/FeedCtrl'
import { fetchFeed, fetchFeedSuccess, fetchFeedFailure } from '../../actions/FeedActions'
import PicGallery from '../../components/picGallery/PicGallery'
/*
 * Feed class
 */
class Feed extends FeedCtrl {
  /*
   * life cicle react's method
   */
  render () {
    this.feed = this.props.feed
    if (this.feed === undefined || this.feed.length < 1) { return null }

    return (
      <ul className='margin-bottom-50 margin-top-10'>
        {this.feed.map((pic, key) => {
          return (<PicGallery key={key} pic={pic} withDescription />)
        })
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    feed: state.FeedReducer.feed.pics
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeed: async () => {
      try {
        const resp = await dispatch(fetchFeed()).payload
        dispatch(fetchFeedSuccess(resp.docs))
      } catch (err) {
        dispatch(fetchFeedFailure(err))
      }
      //! resp.bool ? dispatch(fetchPicsSuccess(resp.docs)) : dispatch(fetchPicsFailure(resp.docs))
      /* dispatch(fetchPics()).then((response) => {
        !response.error ? dispatch(fetchPicsSuccess(response.payload.data)) : dispatch(fetchPicsFailure(response.payload.data))
      }) */
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
