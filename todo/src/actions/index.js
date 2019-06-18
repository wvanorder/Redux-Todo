
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const DELETE_COMPLETED = 'DELETE_COMPLETED';

export function addToDo(newToDo) {
    console.log('action', newToDo);
    return{
        type: ADD_TODO,
        payload: newToDo
    };
};

export const toggleCompleted = index => {
    console.log(index);
    return{
        type: TOGGLE_COMPLETED,
        payload: index
    };
};

export const deleteCompleted = () => {
    return{
        type: DELETE_COMPLETED,
    }
};