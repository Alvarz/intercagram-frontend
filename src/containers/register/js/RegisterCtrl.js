import { Component } from 'react'

/*
 * @class RegisterCtrl
 * */
export default class RegisterCtrl extends Component {

  /*
   * the constructor method is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#constructor
   * */
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      name: '',
      lastname: '',
      nickname: ''
    }

    this.done = false
  }

  /*
   * the constructor method is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#componentdidupdate
   * */
 /* componentDidUpdate(){

    if(!this.done)
      return
    
    this.props.history.push('/signin')
  }*/

  /*
   * handle the submit of search form
   * @param {object} e
   * @return {void}
   */
  handleSubmit = (e) => {
    /** using arrow function to not bind it in constructor */
    e.preventDefault()
    const user = {
      email: this.state.email.trim(),
      password: this.state.password.trim(),
      name: this.state.name.trim(),
      lastname: this.state.lastname.trim(),
      nickname: this.state.nickname.trim(),
    }
    this.props.register(user)
  }
  /*
   * handle the on change event to write on the input
   * @param {object} e
   * @return {void}
   */
  handleChangeEmail = (e) => {
    /** using arrow function to not bind it in constructor */
    this.setState({ email: e.target.value})
  }

  /*
   * handle the on change event to write on the input
   * @param {object} e
   * @return {void}
   */
  handleChangePassword = (e) => {
    /** using arrow function to not bind it in constructor */
    this.setState({ password: e.target.value })
  }

  /*
   * handle the on change event to write on the input
   * @param {object} e
   * @return {void}
   */
  handleChangeName = (e) => {
    /** using arrow function to not bind it in constructor */
    this.setState({ name: e.target.value })
  }

  /*
   * handle the on change event to write on the input
   * @param {object} e
   * @return {void}
   */
  handleChangeLastname = (e) => {
    /** using arrow function to not bind it in constructor */
    this.setState({ lastname: e.target.value })
  }


  /*
   * handle the on change event to write on the input
   * @param {object} e
   * @return {void}
   */
  handleChangeNick = (e) => {
    /** using arrow function to not bind it in constructor */
    this.setState({ nickname: e.target.value })
  }


}
