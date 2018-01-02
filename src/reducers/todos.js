import ACTION from '../consts/action';

function todos(state = [{ text: 'Todo', completed: false, id: Math.random() }], action) {
    switch (action.type) {
        case ACTION.TODO_ADD_ONE:
            return [{ text: action.text, id: Math.random(), completed: false }, ...state];
        case ACTION.TODO_REMOVE_ONE:
            return state.filter(todo => todo.id !== action.index);
        case ACTION.TODO_FINISH_ONE:
            return state.map(todo => {
                if(todo.id === action.index){
                    todo.completed = true;
                }
                return todo;
            });
        default:
            return state;
    }
}
function visibilityFilter(state = 0, action) {
    switch (action.type) {
        case ACTION.TODO_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export default {
    todos,
    visibilityFilter
}