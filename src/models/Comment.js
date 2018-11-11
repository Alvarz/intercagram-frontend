
import Requester from '../utils/request'
import to from '../utils/to'

export default class Comment {
  /*
   * class constructor
   */
  constructor () {
    this.requester = new Requester()
    this.baseUrl = `${process.env.REACT_APP_BACKEND_API}/comments`
  }

  /*
   * get the comment of given pic id
   * @param {number} id
   * @return {promise}
   * */
  async get (id) {
    const [ error, response ] = await to(this.requester.get(`${this.baseUrl}/${id}`))
    if (error) return error
    return response.data
  }

  /*
   * fetch the comment of given pic id
   * @param {number} page
   * @return {promise}
   * */
  async fetch (page = 1) {
    const [ error, response ] = await to(this.requester.get(`${this.baseUrl}`))
    if (error) return error
    return response.data
  }

  /*
   * post a new comment
   * @param {object} comment
   * @return {promise}
   * */
  async post (comment) {
    const [ error, response ] = await to(this.requester.post(`${this.baseUrl}`, comment))
    if (error) return error
    return response.data
  }

  /*
   * remove a comment
   * @param {number} id
   * @return {promise}
   * */
  async remove (id) {
    const [ error, response ] = await to(this.requester.remove(`${this.baseUrl}/uncomment/${id}`))
    if (error) return error
    return response.data
  }
}
