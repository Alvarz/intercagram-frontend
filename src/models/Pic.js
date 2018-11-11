
import Requester from '../utils/request'
import to from '../utils/to'

export default class Pic {
  /*
   * class constructor
   */
  constructor () {
    this.requester = new Requester()

    console.log(process.env)

    this.baseUrl = `${process.env.REACT_APP_BACKEND_API}/pics`
    this.baseUrlFeed = `${process.env.REACT_APP_BACKEND_API}/feed`
  }

  /*
   * search pics
   * @async
   * @param {string} query
   * @return {promise}
   * */
  async search (query) {
    const [error, response] = await to(this.requester.get(`${this.baseUrl}/search/${query}`))
    if (error) return error
    return response.data
  }

  /*
   * get a pic with given id
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
   * fetch pics
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
   * fetch pics of user's seed
   * @async
   * @param {number} page
   * @return {promise}
   * */
  async fetchFeed (page = 1) {
    const [error, response ] = await to(this.requester.get(`${this.baseUrl}/feed`))
    if (error) return error
    return response.data
  }
}
