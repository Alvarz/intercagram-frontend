import React from 'react'
import './css/Search.scss'
import SearchCtrl from './js/SearchCtrl'
import Gallery from '../../components/gallery/Gallery'
import SearchForm from '../../components/searchForm/SearchForm'
/*
 * Search class
 */
export default class Search extends SearchCtrl {
  constructor () {
    super()

    this.pics = []

    this.user = {
      id: 1,
      name: 'Jane',
      lastname: 'Doe',
      email: 'jane@jane.com',
      username: 'therealjanedoe',
      description: 'this is the cool me'
    }

    this.pic = {
      id: 0,
      url: 'https://via.placeholder.com/450',
      description: 'loren ipsum',
      likes: 12,
      commentsQty: 6,
      user: this.user
    }
    for (let i = 1; i < 20; i++) {
      this.pic.id = i
      this.pics.push(this.pic)
    }

    this.description = false
  }
  /*
   * life cicle react's method
   */
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
