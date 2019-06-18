import React from 'react';
import { connect } from 'react-redux';

import { addToDo, toggleCompleted, deleteCompleted } from '../actions';
import './list.css'



class ToDoList extends React.Component {
    state={
        newToDo: '',
    };

    handleChanges =e => {
        this.setState({ newToDo: e.target.value });
    };

    addToDo = e => {
        e.preventDefault();
        this.props.addToDo(this.state.newToDo);
        this.setState({ newToDo: '' });
    };

    toggleCompleted = (e, index) => {
        console.log('u complete me')
        e.preventDefault();
        this.props.toggleCompleted(index);
        console.log()
    };

    deleteCompleted = e => {
        e.preventDefault();
        this.props.deleteCompleted();
    };

    componentDidUpdate(nextState) {
        localStorage.setItem('todoList', JSON.stringify(nextState.todos));
    }

    render() {
        return(
                <div>
                    <h1>ToDo List!</h1>
                    <div className="list">
                        {this.props.todos.map((todo, index) => (
                            <h4 
                            onClick={e => this.toggleCompleted(e, index)} key={index}
                            className={todo.completed ? 'completed' : ''}>
                            {todo.task}
                            </h4>
                        ))}
                    </div>
                    <input 
                        type='text'
                        value={this.state.newToDo}
                        onChange={this.handleChanges}
                        placeholder="add new task"
                    />
                    <button onClick={this.addToDo}>Add new Task</button>
                    <button onClick={this.deleteCompleted}>Delete Completed tasks</button>
                </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(
    mapStateToProps,
    { addToDo, toggleCompleted, deleteCompleted }
)(ToDoList);