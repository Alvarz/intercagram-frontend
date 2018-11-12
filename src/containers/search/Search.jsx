import React from 'react'
import { connect } from 'react-redux'
import './css/Search.scss'
import SearchCtrl from './js/SearchCtrl'
import to from '../../utils/to'
import Gallery from '../../components/gallery/Gallery'
import SearchForm from '../../components/searchForm/SearchForm'
import { fetchPics, fetchPicsSuccess, fetchPicsFailure } from '../../actions/PicsActions'

/*
 *  @class Search
 */
class Search extends SearchCtrl {
  /*
   * the method render is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#render
   * */
  render () {
    return (
      <div className='margin-top-10 margin-bottom-50'>
        <div className='col-12' >
          <SearchForm />
        </div>
        <div className='col-12'>
          <Gallery pics={this.pics} withDescription={this.description} />
        </div>
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
  let list = (state.SearchReducer.stateAreSearchResult) ? state.SearchReducer.picsList.pics : state.PicReducer.picsList.pics
  return {
    stateAreSearchResult: state.SearchReducer.stateAreSearchResult,
    pics: list
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
     * fetch pics
     * @return {void}
     */
    fetchPics: async (page = 1) => {
      const [err, resp] = await to(dispatch(fetchPics(page)).payload)
      if (err || !resp) {
        dispatch(fetchPicsFailure(err, resp))
        return
      }
      if (typeof resp === 'object' && resp.hasOwnProperty('docs')) {
        dispatch(fetchPicsSuccess(resp.docs))
      } else {
        dispatch(fetchPicsSuccess(resp))
      }
    }
  }
}
/** export class with redux connect */
export default connect(mapStateToProps, mapDispatchToProps)(Search)
