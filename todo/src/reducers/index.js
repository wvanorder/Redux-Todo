import {TOGGLE_COMPLETED, ADD_TODO, DELETE_COMPLETED} from '../actions';

const initialState= {
    todos: [
        {
            task: 'mow the lawn',
            completed: false
        },
        {
            task: 'feed the dog',
            completed: true
        },
        {
            task: 'clean the dishes',
            completed: false
        }
    ]
};

export default(state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
        const newToDo = {task: action.payload, completed: false};
        return{
            ...state,
            todos: [...state.todos, newToDo]
        };
        case TOGGLE_COMPLETED:
        return{
            ...state,
            todos: state.todos.map((todo, index) => {
                return action.payload === index ? {...todo, completed: !todo.completed} : todo;
            })
        };
        case DELETE_COMPLETED:
        return{
            ...state,
            todos: state.todos.filter(todo => {
                return !todo.completed ? todo : null;
            })
        }
        default:
            return state;
    }
};