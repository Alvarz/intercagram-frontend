
import Requester from '../utils/request'
import to from '../utils/to'

export default class User {
  /*
   * class constructor
   */
  constructor () {
    this.requester = new Requester()
    this.loginUrl = process.env.REACT_APP_BACKEND_HOST
    this.baseUrl = `${process.env.REACT_APP_BACKEND_API}/users`
  }
  /*
   * perform the register
   * @async
   * @param {object} user
   * @return {promise}
   * */
  async register (user) {
    const [error, response] = await to(this.requester.post(`${this.loginUrl}/signup`, user))
    if (error || !response.data.status) {
      return (error) || response.data
    }
  }

  /*
   * perform the login
   * @async
   * @param {string} _email
   * @param {string} _password
   * @return {promise}
   * */
  async login (_email, _password) {
    const login = {
      email: _email,
      password: _password
    }
    const [error, response] = await to(this.requester.post(`${this.loginUrl}/signin`, login))

    if (error || !response.data.status) {
      return (error) || response.data
    }

    if (response.headers.hasOwnProperty('x-access-token')) {
      response.data['x-access-token'] = response.headers['x-access-token']
    }
    return response.data
  }

  /*
   * get the data of logged in user
   * @async
   * @return {promise}
   * */
  async getMe () {
    const [error, response ] = await to(this.requester.get(`${this.baseUrl}/me`))
    if (error) return error
    return response.data
  }

  /*
   * get the user of give id
   * @async
   * @param {number} id
   * @return {promise}
   * */
  async get (id) {
    const [error, response ] = await to(this.requester.get(`${this.baseUrl}/${id}`))
    if (error) return error
    return response.data
  }

  /*
   * fetch users
   * @async
   * @param {number} page
   * @return {promise}
   * */
  async fetch (page = 1) {
    const [error, response ] = await to(this.requester.get(this.baseUrl))
    if (error) return error
    return response.data
  }

  /*
   * fetch given user's id pics
   * @async
   * @param {number} id
   * @param {number} page
   * @return {promise}
   * */
  async fetchUserPics (id, page = 1) {
    const [error, response ] = await to(this.requester.get(`${this.baseUrl}/${id}/pics?page=${page}`))
    if (error) return error
    return response.data
  }
}
