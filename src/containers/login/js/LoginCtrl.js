import { Component } from 'react'
import Storage from '../../../utils/storage'
export default class LoginCtrl extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidUpdate(){

    if(!this.props.hasOwnProperty('token') || this.props.token == '')
      return
    
    let  { token } = this.props
    Storage.setElement('token', token);
    console.log('redirect to home')
    this.props.history.push('/')
  }

  /*
   * perform a login
   * @param {string} email
   * @param {string} password
   * @return {void}
   */
  async login (email, password) {
    this.props.login(email, password)
  }

  /*
   * handle the submit of search form
   * @param {object} e
   * @return {void}
   */
  handleSubmit = (e) => {
    /** using arrow function to not bind it in constructor */
    e.preventDefault()
    const email = this.state.email.trim()
    const pass = this.state.password.trim()
    this.props.login(email, pass)
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


  handleChangePassword = (e) => {
    /** using arrow function to not bind it in constructor */
    this.setState({ password: e.target.value })
  }
}
