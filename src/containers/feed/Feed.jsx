import React from 'react'
import { connect } from 'react-redux'
import './css/Feed.scss'
import to from '../../utils/to'
import FeedCtrl from './js/FeedCtrl'
import { fetchFeed, fetchFeedSuccess, fetchFeedFailure } from '../../actions/FeedActions'
import PicGallery from '../../components/picGallery/PicGallery'
/*
 * Feed class
 */
class Feed extends FeedCtrl {
  /*
   * the method render is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#render
   * */
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

/*
 * map state to props
 * @param {object} state
 * @return {object}
 */
const mapStateToProps = (state) => {
  return {
    feed: state.FeedReducer.feed.pics
  }
}

/*
 * map dispatch to props
 * @param {function} dispatch
 * @return {object}
 */
const mapDispatchToProps = (dispatch) => {
  return {
    /*
     * fetch the current user feed
     * @reuturn {void}
     */
    fetchFeed: async () => {
      const [err, resp] = await to(dispatch(fetchFeed()).payload)
      if (err || !resp) {
        dispatch(fetchFeedFailure(err, resp))
      }
      dispatch(fetchFeedSuccess(resp.docs))
    }
  }
}
/** class export with redux connect */
export default connect(mapStateToProps, mapDispatchToProps)(Feed)
