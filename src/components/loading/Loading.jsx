import React from 'react'
import './css/Loading.scss'
import LoadingCtrl from './js/LoadingCtrl'
import { connect } from 'react-redux'
import { hideLoading } from '../../actions/LoadingActions'

class Loading extends LoadingCtrl {
  /*
   * the method render is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#render
   * */
  render () {
    return (
      <section>
        {(this.loading.show) ? <div id='loading'><i class='fas fa-cog rotating fa-3x' /> </div> : <div /> }
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
    loading: state.LoadingReducer.loading
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
     * hide the open loading
     * @return {void}
     */
    hideLoading: () => {
      dispatch(hideLoading())
    }
  }
}
/** class export with redux connect */
export default connect(mapStateToProps, mapDispatchToProps)(Loading)
