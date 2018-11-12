import { Component } from 'react'

export default class AlertCtrl extends Component {
  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor (props) {
    super(props)
    this.alert = {
      type: '',
      show: false,
      data: {}
    }
  }

  /*
   * component did update is a react life cycle
   * @see https://reactjs.org/docs/react-component.html#componentdidupdate
   * */
  componentDidUpdate () {
    if (this.alert.show === this.props.alert.show || this.alert.type === this.props.alert.type) { return null }

    this.alert = this.props.alert
    /** scroll to top */
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    //this.forceUpdate()
    this.setState({ alert: this.props.alert })
  }

  /*
   * handle the close alert button
   * @return {void}
   * */
  handleCloseClick = ()=> {
    this.props.hideAlert()
  }
}
