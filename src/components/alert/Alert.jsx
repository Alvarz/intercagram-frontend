import React from 'react'
import './css/Alert.scss'
import AlertCtrl from './js/AlertCtrl'
import { connect } from 'react-redux'
import { hideAlert } from '../../actions/AlertActions'

class Alert extends AlertCtrl {
  /*
   * render alert success
   * @return {html}
   * */
  alertSuccess () {
    return (<div className='alert alert-success' role='alert' >
      {this.alert.data}
      <button type='button' onClick={this.handleCloseClick} className='close' data-dismiss='alert' aria-label='Close'>
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>)
  }

  /*
   * render alert failure
   * @return {html}
   * */
  alertFailure () {
    return (<div className='alert alert-danger' role='alert' >
      {this.alert.data}
      <button type='button' onClick={this.handleCloseClick} className='close' data-dismiss='alert' aria-label='Close'>
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>)
  }

  /*
   * select the proper alert
   * @return {html}
   * */
  showAlert () {
    switch (this.alert.type) {
      case 'SUCCESS':
        return this.alertSuccess()
      case 'FAILURE':
        return this.alertFailure()
      default:
        return null
    }
  }

  /*
   * the method render is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#render
   * */
  render () {
    return (
      <section>
        { this.showAlert() }
      </section>
    )
  }
}
/*
 * map state to props
 * @param {object} state
 * @return {void}
 */
const mapStateToProps = (state) => {
  return {
    alert: state.AlertReducer.alert
  }
}

/*
 * map dispatch to props
 * @param {function} dispatch
 * @return {void}
 */
const mapDispatchToProps = (dispatch) => {
  return {
    /*
     * hide the open alert
     * @return {void}
     */
    hideAlert: () => {
      dispatch(hideAlert())
    }
  }
}
/** class export with redux connect */
export default connect(mapStateToProps, mapDispatchToProps)(Alert)
