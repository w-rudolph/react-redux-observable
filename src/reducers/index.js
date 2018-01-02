import todos from './todos';
import topics from './topics';
import { combineReducers } from 'redux'

export default combineReducers({...todos, ...topics});