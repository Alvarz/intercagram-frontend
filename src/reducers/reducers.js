/**
 * @desc Dependencias
 */
import { combineReducers } from 'redux'
// import { routerReducer as routing } from 'react-router-redux'
import { connectRouter } from 'connected-react-router'
/**
 * @desc Reducers from views
 */
import PicReducer from './PicReducer'
import FeedReducer from './FeedReducer'
import LikeReducer from './LikeReducer'
import UserReducer from './UserReducer'
import FollowReducer from './FollowReducer'
import SearchReducer from './SearchReducer'
import CommentReducer from './CommentReducer'
import UploadReducer from './UploadReducer'

/**
 * @desc Export the reducers
*/
export default (history) => combineReducers({
  router: connectRouter(history),
  PicReducer,
  FeedReducer,
  LikeReducer,
  UserReducer,
  FollowReducer,
  SearchReducer,
  CommentReducer,
  UploadReducer
})
