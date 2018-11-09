
import Requester from '../utils/request'
import to from '../utils/to'

export default class Pic {
  constructor () {
    this.requester = new Requester()
    this.baseUrl = 'http://127.0.0.1:3000/api/pics'
  }

  /*
   *
   *
   *
   * */
  async get (id) {
    const [error, response ] = await to(this.requester.get(`${this.baseUrl}/like/${id}`))
    return response.data
  }

  /*
   *
   *
   *
   * */
  async fetch (page = 1) {
    const [error, response ] = await to(this.requester.get(`${this.baseUrl}/like`))
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
  async post (data) {
    console.log(data)
    let pic = { pic: data._id }
    const [error, response ] = await to(this.requester.post(`${this.baseUrl}/like`, pic))
    return response.data
  }

  /*
   *
   *
   *
   * */
  async remove (id) {
    const [error, response ] = await to(this.requester.remove(`${this.baseUrl}/unlike/${id}`))
    return response.data
  }
}
