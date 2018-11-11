import { Component } from 'react'

export default class PicCtrl extends Component {

  /*
   * constructor
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor (props) {
    super(props)
    this.mustShowComment = false
    this.state = { value: '' }
  }
  componentDidUpdate () {

    console.log(this.props.commentBox)
    /** 
     * if the boolean if comment box not changed or the pic id to edit is not
     * the current id then leave
     **/
    if (this.mustShowComment === this.props.commentBox || this.props.picUpdated._id !== this.props.pic._id) { return }

    this.mustShowComment = this.props.commentBox
    if(!this.mustShowComment){
      console.log(this.props.picUpdated._id)
      console.log(this.props.pic._id)
    
     this.props.history.push(`/pic/${this.props.pic._id}`)
    }

    this.forceUpdate()
  }
  /*
   * unlike a pic
   * @param {object} e
   * @param {object} pic
   * @return {void}
   * */
  unlike (e, pic) {
    e.preventDefault()
    this.props.removeLike(pic)
    this.pic.wasLikedByUser = false
    this.pic.likes--
    console.log('unlike')
    this.forceUpdate()
  }
  /*
   * like a pic
   * @param {object} e
   * @param {object} pic
   * @return {void}
   * */
  like (e, pic) {
    e.preventDefault()
    this.props.postLike(pic)
    this.pic.wasLikedByUser = true
    this.pic.likes++
    console.log('like')
    this.forceUpdate()
  }

  /*
   * comment a pic
   * @param {object} e
   * @param {object} pic
   * @return {void}
   * */
  leaveComment (e, pic) {
    e.preventDefault()
    this.props.showCommentBox(this.props.pic)
  }

  /*
   * handle the submit of search form
   * @param {object} e
   * @return {void}
   */
  handleSubmit = (e) => {
    /** using arrow function to not bind it in constructor */
    e.preventDefault()

    const comment = {
      pic: this.props.pic._id,
      description: this.state.value.trim()
    }
    this.props.postComment(comment, this.props.pic)
  }
  /*
   * handle the on change event to write on the input
   * @param {object} e
   * @return {void}
   */
  handleChange = (e) => {
    /** using arrow function to not bind it in constructor */
    this.setState({ value: e.target.value })
  }
}


