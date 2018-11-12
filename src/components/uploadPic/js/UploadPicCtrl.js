import { Component } from 'react'

export default class UploadPicCtrl extends Component {
  
  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor (props) {
    super(props)

    /** default pic object */
    this.pic = {
      description: '',
      image: 'https://via.placeholder.com/450',
      file: null
    }
    /** default state */
    this.state = {
      description: ''
    }
  }

  /*
   * component did update is a life cycle react method
   * @see https://reactjs.org/docs/react-component.html#componentdidupdate
   * */
  componentDidUpdate () {
    /** if there is no pic or the pic has no changed return */
    if (!this.props.pic || this.props.pic === '' || this.props.pic === this.pic) { return }

    this.pic = this.props.pic
    /** create the preview image url */
    this.pic.image = window.URL.createObjectURL(this.pic.file)
    /** show it */
    this.setState({pic: this.pic})
   // this.forceUpdate()
  }

  /*
   * button handler to publish the image
   * @param {object} e
   * @return {void}
   */
  handlePublishClick = (e) => {
    e.preventDefault()
    this.pic.description = this.state.description
    console.log(this.pic)
    /** create the form data to be uploaded */
    let formData = new FormData()
    formData.append('pic', this.pic.file)
    formData.append('description', this.pic.description)
  
    /** perform the upload */
    this.props.upload(formData)
  }

  /*
   * handle the on change event to write on the input
   * @param {object} e
   * @return {void}
   */
  handleChangeDescription = (e) => {
    /** using arrow function to not bind it in constructor */
    this.setState({ description: e.target.value })
  }
}
