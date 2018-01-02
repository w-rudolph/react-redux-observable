import { getTopics } from '../models/topic';
import ACTION from '../consts/action';

const todoAdd = (action$) => {
    return action$.ofType(ACTION.TODO_ADD)
        .filter(val => val.payload.which === 13)
        .map(val => val.payload.target.value)
        .filter(val => val !== '')
        .map(val => ({ type: ACTION.TODO_ADD_ONE, text: val }));
};

const todoRemove = (action$) => {
    return action$.ofType(ACTION.TODO_REMOVE)
        .map(val => ({ type: ACTION.TODO_REMOVE_ONE, index: val.payload }));
};

const todoFinish = (action$) => {
    return action$.ofType(ACTION.TODO_FINISH)
        .map(val => ({ type: ACTION.TODO_FINISH_ONE, index: val.payload }));
};

const todoFilter = (action$) => {
    return action$.ofType(ACTION.TODO_FILTER)
        .map(val => ({ type: ACTION.TODO_VISIBILITY_FILTER, filter: val.payload }));
}

export default [todoAdd, todoRemove, todoFinish, todoFilter];