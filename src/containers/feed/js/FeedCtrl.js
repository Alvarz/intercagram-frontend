
import { Component } from 'react'

export default class FeedCtrl extends Component {
  /*
   *
   *
   *
   * */
  componentWillMount () {
    this.props.fetchPics()

    /* this.pic = {
      id: 0,
      url: 'https://via.placeholder.com/450',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      likes: 12,
      commentsQty: 6,
      user: {
        id: 1,
        name: 'jane',
        lastname: 'doe',
        username: 'therealjanedoe'
      }
    }
    for (let i = 1; i < 20; i++) {
      this.pic.id = i
      this.pics.push(this.pic)
    } */
  }
}
