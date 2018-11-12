
import { Component } from 'react'

/*
 * @class FeedCtrl
 * */
export default class FeedCtrl extends Component {
  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor (props) {
    super(props)
    this.props.fetchFeed(1)
    this.feed = []
    this.currPage = 1
    this.canLoad = true
  }

  /*
   * componnent did mount
   * @see https://reactjs.org/docs/react-component.html#componentdidmount
   * */
  componentDidMount () {
    let self = this

    /** detect the bottom of the page to load more data */
    window.onscroll = (ev) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && self.canLoad) {
        self.currPage++
        self.canLoad = false
        self.props.fetchFeed(self.currPage)
        /** counter to delay */
        setTimeout(() => { self.canLoad = true }, 1000)
      }
    }
  }
}
