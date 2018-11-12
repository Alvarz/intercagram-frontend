import { Component } from 'react'

/*
 *  @class SearchCtrl
 */
export default class SearchCtrl extends Component {
  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor (props) {
    super(props)
    this.pics = []
    this.areSearchResult = false
    this.totalImage = 20
    this.description = false
    this.currentPage = 1
    this.fetchPics(this.currentPage)
    this.canLoad = true
  }

  /*
   * componnent did mount
   * @see https://reactjs.org/docs/react-component.html#componentdidmount
   * */
  componentDidMount () {
    let self = this

    /**  event to detect to bottom of scroll to load more data */
    window.onscroll = (ev) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && self.canLoad) {
        self.canLoad = false
        self.currentPage++
        self.fetchPics()
        /** counter to delay */
        setTimeout(() => { self.canLoad = true }, 1000)
      }
    }
  }

  /*
   * componnent did update
   * @see https://reactjs.org/docs/react-component.html#componentdidupdate
   * */
  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevProps.pics !== this.props.pics && this.props.pics.length > 0) {
      this.pics = this.props.pics
      this.setState({ pics: this.props.pics })
      // this.forceupdate()
    }
  }
  /*
   * fetch the pics
   * @return {void}
   * */
  async fetchPics () {
    await this.props.fetchPics(this.currentPage)
    this.pics = this.pics.concat(this.props.pics)
    this.setState({ pics: this.props.pics })
    // this.forceUpdate()
  }
}
