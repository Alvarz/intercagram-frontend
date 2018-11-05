import React from 'react'
import './css/Header.scss'
import logo from '../../logo.svg'
import HeaderCtrl from './js/HeaderCtrl'
import { Link } from 'react-router-dom'

export default class Header extends HeaderCtrl {
  render () {
    return (
      <header>
        <nav className='navbar navbar-expand-lg navbar-expand-sm navbar-light bg-light'>
          <ul className='navbar-nav-custom row center'>
            <li className='nav-item active col-xs'>
              <Link className='nav-link' to='/'>Home<span className='sr-only'>(current)</span></Link>
            </li>
            <li className='nav-item col-xs'>
              <Link className='nav-link' to='/search'>Search</Link>
            </li>
            <li className='nav-item col-xs'>
              <Link className='nav-link' to='/upload'>Upload</Link>
            </li>
            <li className='nav-item col-xs'>
              <Link className='nav-link' to='/profile/1'>Profile</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
