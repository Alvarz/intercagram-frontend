import React from 'react'
import { connect } from 'react-redux'
import './css/SearchForm.scss'
import SearchFormCtrl from './js/SearchFormCtrl'
import { setFromSearchResult, search, searchSuccess, searchFailure } from '../../actions/SearchActions'
import to from '../../utils/to'

class SearchForm extends SearchFormCtrl {
  /*
   * the method render is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#render
   * */
  render () {
    return (
      <form className='form-inline' onSubmit={this.handleSearch}>
        <div className='form-group form-search-input'>
          <label htmlFor='searchInput' className='sr-only'>Search</label>
          <input type='search' placeholder='search...' value={this.state.value} onChange={this.handleChange} className='form-control-plaintext' id='searchInput' />
        </div>
        <button type='submit' className='form-search-btn btn btn-outline-primary btn-sm mb-2'><i className='fa fa-lg fa-search' /></button>
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
    search: async (query) => {
      const [err, resp] = await to(dispatch(search(query)).payload)
      if (err || !resp) {
        dispatch(searchFailure(err, resp))
        return
      }
      dispatch(searchSuccess(resp))
      dispatch(setFromSearchResult(true))
    }
  }
}
/** class exporter with redux connect */
export default connect(null, mapDispatchToProps)(SearchForm)
