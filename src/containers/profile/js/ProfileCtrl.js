import { Component } from 'react'

export default class ProfileCtrl extends Component {
  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor () {
    this.totalImage = 20
    this.pics = []
    let id = this.props.match.params.id
    this.props.getUser(id)
    this.props.fetchUserPics(id)
  }
}
