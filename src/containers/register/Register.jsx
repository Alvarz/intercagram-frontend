import React from 'react'
import './css/Register.scss'
import RegisterCtrl from './js/RegisterCtrl'
import { Link } from 'react-router-dom'
import to from '../../utils/to'
import { connect } from 'react-redux'
import { register, registerSuccess, registerFailure } from '../../actions/UsersActions'
import { showAlert } from '../../actions/AlertActions'
import Alert from '../../components//alert/Alert'
/*
 * @class Register
 * */
class Register extends RegisterCtrl {
  /*
   * the method render is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#render
   * */
  render () {
    return (
      <div className='Register'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-8 center col-cont' >
              <Alert />
            </div>
            <div className='col-12 col-md-8 center col-cont'>
              <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='nickname'>Nickname</label>
                  <input type='text' value={this.state.nickname} onChange={this.handleChangeNick} className='form-control' id='nickname' aria-describedby='nickname' placeholder='Nickname' required />
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Email address</label>
                  <input type='email' value={this.state.email} onChange={this.handleChangeEmail} className='form-control' id='email' aria-describedby='emailHelp' placeholder='Enter email' required />
                  <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input type='password' value={this.state.password} onChange={this.handleChangePassword} className='form-control' id='password' placeholder='Password' required />
                </div>
                <hr />
                <div className='form-group'>
                  <label htmlFor='nickname'>Name</label>
                  <input type='text' value={this.state.name} onChange={this.handleChangeName} className='form-control' id='name' aria-describedby='name' placeholder='Name' required />
                </div>
                <div className='form-group'>
                  <label htmlFor='nickname'>Lastname</label>
                  <input type='text' value={this.state.Lastname} onChange={this.handleChangeLastname} className='form-control' id='lastname' aria-describedby='lastname' placeholder='Lastname' required />
                </div>
                <div className='row'>

                  <div className='col'>
                    <button type='submit' className='btn btn-primary'>SignUp</button>
                  </div>
                  <div className='col'>
                    <Link className='nav-link' to='/signin'><i className='fa fa-lg fa-home' /> SignIn</Link>
                  </div>
                </div>

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
    register: async (user) => {
      const [err, resp] = await to(dispatch(register(user)).payload)
      if (err || !resp) {
        dispatch(registerFailure(err, resp))
        dispatch(showAlert({
          type: 'ERROR',
          show: true,
          data: err.message
        }))
      } else if (!resp.status) {
        dispatch(registerFailure(resp.error))
        dispatch(showAlert({
          type: 'FAILURE',
          show: true,
          data: resp.message
        }))
      } else {
        dispatch(registerSuccess(resp))
        dispatch(showAlert({
          type: 'SUCCESS',
          show: true
        })
        )
      }
    }
  }
}
/** class exporter with redux connect */
export default connect(mapStateToProps, mapDispatchToProps)(Register)
