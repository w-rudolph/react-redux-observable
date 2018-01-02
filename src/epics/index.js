import 'rxjs';
import { combineEpics } from 'redux-observable';
import todos from './todos';
import topics from './topics';

export default combineEpics(...todos, ...topics);