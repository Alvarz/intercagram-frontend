import React from 'react'
import './css/App.scss'
import AppCtrl from './js/AppCtrl'
import { Switch, Route } from 'react-router-dom'
import Header from '../../components/header/Header'
import Loading from '../../components/loading/Loading'
import Feed from '../feed/Feed'
import PicPage from '../picPage/PicPage'
import Profile from '../profile/Profile'
import Follow from '../follow/Follow'
import Search from '../search/Search'
import Upload from '../upload/Upload'
import Alert from '../../components//alert/Alert'
import to from '../../utils/to'
import { connect } from 'react-redux'
import { getMe, getMeSuccess, getMeFailure } from '../../actions/UsersActions'

class App extends AppCtrl {
  /*
   * the method render is part of react lifecycle
   * @see https://reactjs.org/docs/react-component.html#render
   * */
  render () {
    return (
      <div className='App'>
        <div className='container'>
          <div className='row margin-top-20'>
            <div className='col-12 col-md-8 center col-cont' >
              <Alert />
              <Loading />
            </div>
            <div className='col-12 col-md-8 center col-cont'>
              <Switch>
                <Route exact path='/' component={Feed} />
                <Route path='/pic/:id' component={PicPage} />
                <Route path='/search' component={Search} />
                <Route path='/upload' component={Upload} />
                <Route path='/profile/:id' component={Profile} />
                <Route path='/followers/:userId' component={Follow} />
                <Route path='/following/:userId' component={Follow} />
              </Switch>
            </div>
          </div>
        </div>
        <Header />
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
    me: state.UserReducer.me.user,
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
    getMe: async () => {
      const [err, resp] = await to(dispatch(getMe()).payload)
      if (err || !resp) {
        dispatch(getMeFailure(err, resp))
      }
      dispatch(getMeSuccess(resp))
    }
  }
}
/** class exporter with redux connect */
export default connect(mapStateToProps, mapDispatchToProps)(App)
