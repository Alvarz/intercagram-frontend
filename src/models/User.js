
import Requester from '../utils/request'
import to from '../utils/to'

export default class User {
  /*
   * class constructor
   */
  constructor () {
    this.requester = new Requester()
    this.baseUrl = `${process.env.REACT_APP_BACKEND_API}/users`
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
    const [error, response ] = await to(this.requester.get(`${this.baseUrl}/${id}/pics`))
    if (error) return error
    return response.data
  }
}
