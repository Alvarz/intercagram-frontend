export default class Storage {
  /*
   * store an element on the local/session storage
   * @param {string} index
   * @param {string} data
   * @param {bool} isLocal
   * @return {void}
   * */
  static setElement (index, data, isLocal = true) {
    if (isLocal) { window.localStorage.setItem(index, data) } else { window.sessionStorage.setItem(index, data) }
  }

  /*
   * get an element on the local/session storage
   * @param {string} index
   * @param {bool} isLocal
   * @return {string}
   * */
  static getElement (index, isLocal = true) {
    if (isLocal) { return window.localStorage.getItem(index) } else { return window.sessionStorage.getItem(index) }
  }

  /*
   * remove an element on the local/session storage
   * @param {string} index
   * @param {bool} isLocal
   * @return {void}
   * */
  static removeElement (index, isLocal = true) {
    if (isLocal) { window.localStorage.removeItem(index) } else { window.sessionStorage.removeItem(index) }
  }

  /*
   * clear the local/session storage
   * @param {bool} isLocal
   * @return {void}
   * */
  static clear (isLocal = true) {
    if (isLocal) { window.localStorage.clear() } else { window.sessionStorage.clear() }
  }
}
