import { Component } from 'react'
/*
 * @class header controller
 */
export default class HeaderCtrl extends Component {
  /*
   * go back to the previous
   * @return {void}
   * */
  goBack () {
    window.history.back()
  }
}
