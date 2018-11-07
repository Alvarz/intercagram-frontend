import React from 'react'
import './css/Header.scss'
import HeaderCtrl from './js/HeaderCtrl'
import { Link } from 'react-router-dom'

export default class Header extends HeaderCtrl {
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
              <Link className='nav-link' to='/profile/1'><i className='fas fa-lg fa-user' /></Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
