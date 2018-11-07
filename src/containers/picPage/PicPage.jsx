import React from 'react'
import { connect } from 'react-redux'
import './css/PicPage.scss'
import PicPageCtrl from './js/PicPageCtrl'
import Pic from '../../components/pic/Pic'
import { getPic, getPicSuccess, getPicFailure } from '../../actions/PicsActions'
import CommentList from '../../components/commentList/CommentList'
// <Route path="/pic/:picId"   component={  } />
class PicPage extends PicPageCtrl {
  /*
   *
   *
   * */

  render () {
    this.pic = this.props.pic
    console.log(this.props)
    if (this.pic === undefined || Object.keys(this.pic).length < 1) return null
    return (
      <div className='col-12 margin-bottom-50 margin-top-10'>
        <Pic pic={this.pic} withDescription />
        <CommentList comments={this.pic.comments} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pic: state.PicReducer.pic.pic
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPic: async (id) => {
      const resp = await dispatch(getPic(id)).payload
      !resp.bool ? dispatch(getPicSuccess(resp)) : dispatch(getPicFailure(resp))
      /* dispatch(fetchPics()).then((response) => {
        !response.error ? dispatch(fetchPicsSuccess(response.payload.data)) : dispatch(fetchPicsFailure(response.payload.data))
      }) */
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PicPage)
