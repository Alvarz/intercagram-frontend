import React from 'react'
import './css/App.scss'
import AppCtrl from './js/AppCtrl'
import { Switch, Route } from 'react-router-dom'
import Header from '../../components/header/Header'
import Feed from '../feed/Feed'
import PicPage from '../picPage/PicPage'
import Profile from '../profile/Profile'
import Follow from '../follow/Follow'
import Search from '../search/Search'
import Upload from '../upload/Upload'

// <Route path="/pic/:picId"   component={  } />
export default class App extends AppCtrl {
  render () {
    return (
      <div className='App'>
        <Header />
        <div className='container'>
          <div className='row'>
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
      </div>
    )
  }
}
