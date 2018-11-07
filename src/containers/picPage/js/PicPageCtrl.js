import { Component } from 'react'

export default class PicPageCtrl extends Component {
  constructor (props) {
    super(props)
    console.log('PicPage container')
  }

  componentWillMount () {
    const id = this.props.match.params.id
    this.props.getPic(id)
    /* this.pic = {
      id: this.id,
      url: 'https://via.placeholder.com/450',
      description: 'loren ipsum',
      likes: 12,
      commentsQty: 6,
      user: {
        id: 1,
        name: 'jane',
        lastname: 'doe',
        username: 'therealjanedoe'
      } */

    /*   this.commentList = []

    this.comment = {
      description: 'the description',
      user: {
        id: 1,
        name: 'john',
        lastname: 'doe',
        username: 'thecreatejohndoe',
        email: 'joendie@example.com'
      }
    }
    for (let i = 0; i < 6; i++) {
      this.commentList.push(this.comment)
    } */
  }
}
