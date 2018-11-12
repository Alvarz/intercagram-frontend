import { Component } from 'react'

export default class LoadingCtrl extends Component {
  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor (props) {
    super(props)
    this.loading = {
      show: false
    }
  }

  /*
   * component did update is a react life cycle
   * @see https://reactjs.org/docs/react-component.html#componentdidupdate
   * */
  componentDidUpdate () {
    if (this.loading.show === this.props.loading.show ) { return null }

    this.loading = this.props.loading
    /** scroll to top */
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    //this.forceUpdate()
    this.setState({ loading: this.props.loading })
  }

  /*
   * handle the close loading button
   * @return {void}
   * */
  handleCloseClick = ()=> {
    this.props.hideLoading()
  }
}
