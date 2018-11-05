import React from 'react'
import './css/App.scss'
import AppCtrl from './js/AppCtrl'
import { Switch, Route } from 'react-router-dom'
import Header from '../../components/header/Header'
import Feed from '../feed/Feed'
import PicPage from '../picPage/PicPage'
import Profile from '../profile/Profile'

// <Route path="/pic/:picId"   component={  } />
export default class App extends AppCtrl {
  render () {
    return (
      <div className='App'>
        <Header />
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-8 center'>
              <Switch>
                <Route exact path='/' component={Feed} />
                <Route path='/pic/:id' component={PicPage} />
                <Route path='/profile/:id' component={Profile} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
