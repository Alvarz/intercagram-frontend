import { Component } from 'react'

/*
 * @class ProfileCtrl
 */
export default class ProfileCtrl extends Component {
  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor (props) {
    super(props)
    this.totalImage = 20
    this.pics = {
      docs: []
    }
    this.currentPage = 1
    this.userId = this.props.match.params.id
    this.props.getUser(this.userId)
    this.props.fetchUserPics(this.userId, this.currentPage)
  }

  /*
   * component did mount
   * @see https://reactjs.org/docs/react-component.html#componentdidmount
   * */
  conponentDidMount () {
    let self = this

    /** detect the bottom of the page to load more data */
    window.onscroll = (ev) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && self.canLoad) {
        self.currPage++
        self.canLoad = false
        self.props.fetchUserPics(self.userId, self.currentPage)
        /** counter to delay */
        setTimeout(() => { self.canLoad = true }, 1000)
      }
    }
  }
}
