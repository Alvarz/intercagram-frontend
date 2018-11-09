
import Requester from '../utils/request'
import to from '../utils/to'

export default class Pic {
  constructor () {
    this.requester = new Requester()
    this.baseUrl = 'http://127.0.0.1:3000/api/pics'
    this.baseUrlFeed = 'http://127.0.0.1:3000/api/feed'
  }

  /*
   *
   *
   *
   * */
  async get (id) {
    const [error, response ] = await to(this.requester.get(`${this.baseUrl}/${id}`))
    return response.data
  }

  /*
   *
   *
   *
   * */
  async fetch (page = 1) {
    const [error, response ] = await to(this.requester.get(this.baseUrl))
    return response.data
    /* let [error, response] = await to()

    if (error) {
      console.error(error)
      return error
    }
    return response */
  }

  /*
   *
   *
   *
   * */
  async fetchFeed (page = 1) {
    const [error, response ] = await to(this.requester.get(this.baseUrlFeed))
    return response.data
    /* let [error, response] = await to()

    if (error) {
      console.error(error)
      return error
    }
    return response */
  }
}
