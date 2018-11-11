import { Component } from 'react'

export default class PicPageCtrl extends Component {
  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor () {
    const id = this.props.match.params.id
    this.props.getPic(id)
  }
}
