/**
 * @desc
 */
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
/**
 * Import views (containers)
 */
// import Welcome from '../containers/Welcome/Welcome'
import App from '../containers/app/App'

/**
 * Metodo de manejo de rutas.
 * @param  { Object } props
 * @return { Routing }
 */
const Routes = props => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/home' component={App} />
        <Route path='/search' component={App} />
        <Route path='/upload' component={App} />
        <Route path='/profile/:userId' component={App} />
        <Route path='/profile' component={App} />
        <Route path='/pic/:picId' component={App} />
      </Switch>
    </Router>
  )
}
export default Routes
