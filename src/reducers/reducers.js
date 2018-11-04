/**
 * @desc Dependencias
 */
import { combineReducers } from 'redux'
// import { routerReducer as routing } from 'react-router-redux'
import { connectRouter } from 'connected-react-router'
/**
 * @desc Reducers from views
 */
// import WelcomeReducer from './WelcomeReducers'

/**
 * @desc Export the reducers
*/
export default (history) => combineReducers({
  router: connectRouter(history)
  // WelcomeReducer,
})
