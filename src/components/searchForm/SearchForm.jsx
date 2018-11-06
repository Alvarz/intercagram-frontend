import React from 'react'
import './css/SearchForm.scss'
import SearchFormCtrl from './js/SearchFormCtrl'

export default class SearchForm extends SearchFormCtrl {
  render () {
    return (
      <form className='form-inline'>
        <div className='form-group form-search-input'>
          <label htmlFor='searchInput' className='sr-only'>Email</label>
          <input type='text' placeholder='search...' className='form-control-plaintext' id='searchInput' />
        </div>
        <button type='submit' className='form-search-btn btn btn-outline-primary btn-sm mb-2'><i className='fa fa-lg fa-search' /></button>
      </form>
    )
  }
}
