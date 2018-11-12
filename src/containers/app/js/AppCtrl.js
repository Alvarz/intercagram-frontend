import { Component } from 'react'
import Storage from '../../../utils/storage'

/*
 * @class AppCtrl
 * */
export default class AppCtrl extends Component {
  /*
   * component did update is a react life cycle method
   * @see https://reactjs.org/docs/react-component.html#constructor
   */
  constructor (props) {
    super(props)
    /** test if we have tue proper credentials */
    this.testCredentials()
    /** if we have the proper credentials, then look for the user data */
    this.getMe()
  }

  /*
   * component did update is a react life cycle method
   * @see https://reactjs.org/docs/react-component.html#componentdidupdate
   */
  componentDidUpdate () {
    /** test if we have tue proper credentials */
    this.testCredentials()
  }
  /*
   * test if we have proper credentials
   * @return {void}
   */
  testCredentials () {
    /** get the token from the storage */
    const token = Storage.getElement('token')
    if (token && token !== '') { return }

    /** we have no token so must clean the credentials */
    Storage.clear()
    this.props.history.push('/signin')
  }

  /*
   * get the logged in users data
   * @return {void}
   */
  async getMe () {
    await this.props.getMe()
  }
}
