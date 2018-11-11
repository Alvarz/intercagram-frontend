
import Requester from '../utils/request'
import to from '../utils/to'

export default class Like {
  /*
   * class constructor
   */
  constructor () {
    this.requester = new Requester()
    this.baseUrl = `${process.env.REACT_APP_BACKEND_API}/pics`
  }

  /*
   * get the like of given pic id
   * @async
   * @param {number} id
   * @return {promise}
   * */
  async get (id) {
    const [ error, response ] = await to(this.requester.get(`${this.baseUrl}/like/${id}`))
    if (error) return error
    return response.data
  }

  /*
   * fetch likes
   * @async
   * @param {number} page
   * @return {promise}
   * */
  async fetch (page = 1) {
    const [ error, response ] = await to(this.requester.get(`${this.baseUrl}/like`))
    if (error) return error
    return response.data
  }

  /*
   * like a user
   * @async
   * @param {object} data
   * @return {promise}
   * */
  async post (data) {
    let pic = { pic: data._id }
    const [ error, response ] = await to(this.requester.post(`${this.baseUrl}/like`, pic))
    if (error) return error
    return response.data
  }

  /*
   * remove a user
   * @param {number} id
   * @return {promise}
   * */
  async remove (id) {
    const [error, response ] = await to(this.requester.remove(`${this.baseUrl}/unlike/${id}`))
    if (error) return error
    return response.data
  }
}
