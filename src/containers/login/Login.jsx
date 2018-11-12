import React from 'react'
import './css/Login.scss'
import LoginCtrl from './js/LoginCtrl'
import to from '../../utils/to'
import { connect } from 'react-redux'
import { login, loginSuccess, loginFailure, setToken } from '../../actions/UsersActions'

/*
 * @class Login
 * */
class Login extends LoginCtrl {
  /*
   * the method render is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#render
   * */
  render () {
    console.log('aca')
    return (
      <div className='Login'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-8 center col-cont'>
              <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='email'>Email address</label>
                  <input type='email' value={this.state.email} onChange={this.handleChangeEmail} className='form-control' id='email' aria-describedby='emailHelp' placeholder='Enter email' />
                  <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input type='password' value={this.state.password} onChange={this.handleChangePassword} className='form-control' id='password' placeholder='Password' />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
/*
 * map state to props
 * @param {object} state
 * @return {object}
 */
const mapStateToProps = (state) => {
  return {
    token: state.UserReducer.token
  }
}

/*
 * map dispatch to props
 * @param {function} dispatch
 * @return {object}
 */
const mapDispatchToProps = (dispatch) => {
  return {
    /*
     * get the current user data
     * @return {void}
     */
    login: async (email, password) => {
      const [err, resp] = await to(dispatch(login(email, password)).payload)
      if (err || !resp) {
        dispatch(loginFailure(err, resp))
      }
      dispatch(loginSuccess(resp))
      dispatch(setToken(resp['x-access-token']))
    }
  }
}
/** class exporter with redux connect */
export default connect(mapStateToProps, mapDispatchToProps)(Login)
