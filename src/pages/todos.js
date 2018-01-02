import { connect } from 'react-redux';
import './todos.scss';
import ACTION from '../consts/action';

const mapStateToProps = (state) => {
    return { 
        todos: state.todos, 
        filter: state.visibilityFilter,
    }
};
const mapDispatchToProps = (dispatch) => {
    return { dispatch };
};

class Todos extends React.Component {
    render() {
        const { todos, filter, dispatch } = this.props;
        const filterTodos = todos.filter(todo => {
            if (filter === 0) {
                return true;
            } else if (filter === 1) {
                return todo.completed === true;
            }
            return todo.completed === false;
        });
        return (
            <div>
                <div>Todo List:</div>
                <input onKeyUp={(event) => dispatch({ type: ACTION.TODO_ADD, payload: event })} />
                <ul>
                    {filterTodos.map(todo => {
                        return (
                            <li key={todo.id}>
                                <span className={todo.completed ? 'todo-finished' : ''}>{todo.text}</span>&nbsp;
                                {this.renderActionButtons(todo)}
                            </li>
                        );
                    })}
                </ul>
                <span className="filter-actions">
                    <span className="action" onClick={() => dispatch({ type: ACTION.TODO_FILTER, payload: 0 })}>All</span>
                    <span className="action" onClick={() => dispatch({ type: ACTION.TODO_FILTER, payload: 1 })}>Completed</span>
                    <span className="action" onClick={() => dispatch({ type: ACTION.TODO_FILTER, payload: 2 })}>Uncompleted</span>
                </span>
            </div>
        );
    }

    renderActionButtons(todo) {
        const { dispatch } = this.props;
        if (!todo.completed) {
            return (
                <span className="todo-action-buttons">
                    <button onClick={() => dispatch({ type: ACTION.TODO_REMOVE, payload: todo.id })}>delete</button>&nbsp;
                    <button onClick={() => dispatch({ type: ACTION.TODO_FINISH, payload: todo.id })}>finish</button>
                </span>
            );
        }
        return <button onClick={() => dispatch({ type: ACTION.TODO_REMOVE, payload: todo.id })}>delete</button>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);