/**
 * @desc Dependencias
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { ConnectedRouter } from 'connected-react-router'
import Routes from './router/routes'
import { config } from 'dotenv'
import './index.scss'
import store, { history } from './store/store'
require('dotenv').config()
// import App from './App'

/**
 * Launch the dotenv configuration method
 *
 */
config()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
