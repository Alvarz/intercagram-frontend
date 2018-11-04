/**
 *
 * @desc Dependencias
 */
import { applyMiddleware, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'

import createRootReducer from '../reducers/reducers'

/**
 * Launch the dotenv configuration method
 *
 */
/**
 * history description
 *
 * @var {Function}
 */
export const history = createBrowserHistory()

/**
 * Create the store
 */
const store = createStore(
  createRootReducer(history), // new root reducer with router state
  {}, // initial state
  composeWithDevTools(
    applyMiddleware(
      // logger,
      routerMiddleware(history) // for dispatching history actions
    )
  )
)

export default store
