import { Component } from 'react'

export default class SearchCtrl extends Component {
  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor () {
    this.pics = []
    this.areSearchResult = false
    this.totalImage = 20
    this.description = false
    this.fetchPics()
  }

  /*
   * componnent did update
   * @see https://reactjs.org/docs/react-component.html#componentdidupdate
   * */
  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevProps.pics !== this.props.pics && this.props.pics.length > 0) {
      this.pics = this.props.pics
      this.forceUpdate()
    }
  }
  /*
   * fetch the pics
   * @return {void}
   * */
  async fetchPics () {
    await this.props.fetchPics()
    this.pics = this.props.pics
    this.forceUpdate()
  }
}
