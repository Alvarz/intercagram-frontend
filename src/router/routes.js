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
import App from '../App'

/**
 * Metodo de manejo de rutas.
 * @param  { Object } props
 * @return { Routing }
 */
const Routes = props => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={App} />
        <Route path='/' component={App} />
      </Switch>
    </Router>
  )
}
export default Routes
