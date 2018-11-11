
import Requester from '../utils/request'
import to from '../utils/to'

export default class Follow {
  /*
   * class constructor
   */
  constructor () {
    this.requester = new Requester()
    this.baseUrl = 'http://127.0.0.1:3000/api/follow'
    this.followersUrl = 'http://127.0.0.1:3000/api/followers'
    this.followingUrl = 'http://127.0.0.1:3000/api/following'
  }

  /*
   * get the follow of given pic id
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
   * fetch the following of given pic id
   * @async
   * @param {number} id
   * @param {number} page
   * @return {promise}
   * */
  async fetchFollowing (id, page = 1) {
    const [error, response ] = await to(this.requester.get(`${this.followingUrl}/${id}`))
    if (error) return error
    return response.data
  }
  /*
   * fetch the followers of given pic id
   * @async
   * @param {number} id
   * @param {number} page
   * @return {promise}
   * */
  async fetchFollowers (id, page = 1) {
    const [error, response ] = await to(this.requester.get(`${this.followersUrl}/${id}`))
    if (error) return error
    return response.data
  }

  /*
   * follow an user
   * @async
   * @param {object} data
   * @return {promise}
   * */
  async post (data) {
    let followed = { followed: data._id }
    const [error, response ] = await to(this.requester.post(this.baseUrl, followed))
    if (error) return error
    return response.data
  }

  /*
   * remove an user
   * @async
   * @param {number} id
   * @return {promise}
   * */
  async remove (id) {
    const [error, response ] = await to(this.requester.remove(`${this.baseUrl}/${id}`))
    if (error) return error
    return response.data
  }
}
