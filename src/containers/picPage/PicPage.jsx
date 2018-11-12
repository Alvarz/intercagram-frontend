import React from 'react'
import { connect } from 'react-redux'
import './css/PicPage.scss'
import to from '../../utils/to'
import PicPageCtrl from './js/PicPageCtrl'
import Pic from '../../components/pic/Pic'
import { getPic, getPicSuccess, getPicFailure } from '../../actions/PicsActions'
import CommentList from '../../components/commentList/CommentList'
/*
   * @class PicPage
   * */
class PicPage extends PicPageCtrl {
  /*
   * the method render is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#render
   * */
  render () {
    this.pic = this.props.pic
    if (this.pic === undefined || Object.keys(this.pic).length < 1) return null
    return (
      <div className='col-12 margin-bottom-50 margin-top-10'>
        <Pic pic={this.pic} withDescription />
        <CommentList comments={this.pic.comments} />
      </div>
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
    pic: state.PicReducer.pic.pic
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
     * get the pic of given id
     * @param {number} id
     * @return {void}
     * */
    getPic: async (id) => {
      const [err, pic] = await to(dispatch(getPic(id)).payload)
      if (err) {
        dispatch(getPicFailure(err, pic))
        return
      }
      dispatch(getPicSuccess(pic))
    }
  }
}
/** class exporter with redux connect */
export default connect(mapStateToProps, mapDispatchToProps)(PicPage)
