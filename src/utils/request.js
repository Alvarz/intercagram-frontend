// import { setStopRequest } from '../actions/ConfigActions';
import axios from 'axios'
import to from './to'
import Storage from './storage'

export default class Requester {
/**
* @desc Metodo nativo de React.js
*
* @doc https://reactjs.org/docs/react-component.html#constructor
* @return { void }
*/
  constructor () {
    let token = Storage.getElement('token')

    this.config = {
    /**
     *
     *   HEADER WAS HARDCODED TO TEST PURPOSES *
     * */

      headers: { 'Authorization': `Bearer ${token}` }
    }
    // Cabeceras
    this.dispatch = false
  }

  /**
 *  add headers
 * @param { Object } headersArray
 * @return { Headers }
 */
  addHeaders (newHeaders = {}) {
    //
    let { headersArray } = this

    // Recorremos y añadimos las cabeceras.
    Object.keys(headersArray).length > 0 && headersArray.forEach((prop, value) => {
      headersArray.append(prop, value)
    })
  }

  /**
 * performa  get request
 * @param { String } endpoint
 * @return { Promise }
 */
  async get (endpoint) {
    let [error, resp] = await to(axios.get(endpoint, this.config))
    if (error) {
      console.error(error)
      return error
    }
    return resp.data
  }

  /**
 * perfform a post
 * @param  { String } endpoint
 * @param  { Object } data
 * @return { Promise }
 */
  async post (endpoint, data) {
    return axios.post(endpoint, data, this.config)
  }

  /**
 * perform a remove request
 * @param { String } endpoint
 * @return { Promise }
 */
  async remove (endpoint) {
    let [error, resp] = await to(axios.delete(endpoint, this.config))
    if (error) {
      console.error(error)
      return error
    }
    return resp.data
  }
}
