
import { Component } from 'react'

export default class FeedCtrl extends Component {
  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor (props) {
    super(props)
    this.props.fetchFeed()
  }
}
