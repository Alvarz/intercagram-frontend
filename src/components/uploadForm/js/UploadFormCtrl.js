import { Component } from 'react'

export default class UploadFormCtrl extends Component {
 
  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor (props) {
    super(props)
    this.state = { file: '' }
  }

  /*
   * handle the submit of search form
   * @param {object} e
   * @return {void}
   */
  handleSubmit = (e) => {
    /** using arrow function to not bind it in constructor */
    e.preventDefault()

    const pic = {
      file: e.target.file.files[0]
    }
    this.props.showIt(pic)
  }

  /*
   * handle the on change event to write on the input
   * @param {object} e
   * @return {void}
   */
  handleChangeFile = (e) => {
    /** using arrow function to not bind it in constructor */
    this.setState({ file: e.target.value })
  }
}
