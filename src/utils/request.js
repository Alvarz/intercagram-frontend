// import { setStopRequest } from '../actions/ConfigActions';
import axios from 'axios'
import to from './to'
export default class Requester {
/**
* @desc Metodo nativo de React.js
*
* @doc https://reactjs.org/docs/react-component.html#constructor
* @return { void }
*/
  constructor () {
    this.config = {
      headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNWJlNTZiYmNlYmE2NjExN2Q4NWY0OGE0IiwiaWF0IjoxNTQxNzYyMTA1fQ.mn3RyStSORGpVRu7Gjp9-bGAd3Ug6ZNdJdl02UZSK-0' }
    }
    // Cabeceras
    this.dispatch = false
  }

  /**
 * metodo para obtener el dispatch y despachar acciones
 * @return { void }
 */
  addDispatch (dispatch) {
    this.dispatch = dispatch
  }

  /**
 * @desc Añade cabeceras a la request
 *
 * @param { Object } headersArray
 *
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
 * @desc
 *
 * @param { String } endpoint
 *
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
 * Metodo para hacer request post
 * @param  { String } endpoint
 * @param  { Object } data
 * @return { Promise }
 */
  async post (endpoint, data) {
    return axios.post(endpoint, data, this.config)
  }

  /**
 * @desc
 *
 * @param { String } endpoint
 *
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
