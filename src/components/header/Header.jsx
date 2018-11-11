import React from 'react'
import './css/Header.scss'
import HeaderCtrl from './js/HeaderCtrl'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends HeaderCtrl {
  /*
   * the method render is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#render
   * */
  render () {
    return (
      <header>
        <nav className='navbar navbar-expand-lg navbar-expand-sm navbar-light bg-light'>
          <ul className='navbar-nav-custom row center'>
            <li className='nav-item active col-xs'>
              <Link className='nav-link' to='/'><i className='fas fa-chevron-left' /></Link>
            </li>
            <li className='nav-item col-xs'>
              <Link className='nav-link' to='/search'><i className='fas fa-lg fa-search' /></Link>
            </li>
            <li className='nav-item active col-xs'>
              <Link className='nav-link' to='/'><i className='fa fa-lg fa-home' /></Link>
            </li>
            <li className='nav-item col-xs'>
              <Link className='nav-link' to='/upload'><i className='fas fa-lg fa-camera' /></Link>
            </li>
            <li className='nav-item col-xs'>
              <Link className='nav-link' to={`/profile/${this.props.me._id}`}><i className='fas fa-lg fa-user' /></Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
/*
 * map state to props
 * @param {object} state
 * @return {void}
 */
const mapStateToProps = (state) => {
  return {
    me: state.UserReducer.me.user
  }
}
/** class export with redux connect */
export default connect(mapStateToProps, null)(Header)
