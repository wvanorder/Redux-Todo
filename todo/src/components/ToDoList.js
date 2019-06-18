import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addToDo, toggleCompleted, deleteCompleted } from '../actions';
import './list.css'

const Wrapperz = styled.section`
  padding: 2em;
  background: papayawhip;
  width: 70%;
  margin: 30px auto;
  border-radius: 15px;
  box-shadow: 5px 5px #FFF8EC;
  display: flex;
  flex-flow: column nowrap;
  
`;

const Titlez = styled.h1`
  font-size: 8em;
  text-align: center;
  color: #45776A;
  text-shadow: 5px 5px white;
  margin-bottom: -20px;
  margin-top: 0px;
`;

const Taskz = styled.h4`
font-size: 34px;
text-align: center;
color: #777397;
cursor: pointer;
margin: 15px 0px 15px 0px;
`

const Inputz= styled.input`
    height: 40px;
    border: 1px solid white;
    font-size: 24px;
    
`

const Fieldz  = styled.div`
margin-top: 20px;
display: flex;
flex-flow: row nowrap;
justify-content: space-evenly;
    button{
        font-size: 24px;
        width: 40%;
        max-width: 200px;
        border-radius: 15px;
        color: #45776A;
        border-color: white;
        &:hover{
            color: white;
            background-color: #45776A;
            transition-duration: 0.2s;
            cursor: pointer;
        }
    }
`



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
                <Wrapperz>
                    <Titlez>ToDo List!</Titlez>
                    <div className="list">
                        {this.props.todos.map((todo, index) => (
                            <Taskz 
                            onClick={e => this.toggleCompleted(e, index)} key={index}
                            className={todo.completed ? 'completed' : ''}>
                            {todo.task}
                            </Taskz>
                        ))}
                    </div>
                    <Inputz 
                            type='text'
                            value={this.state.newToDo}
                            onChange={this.handleChanges}
                            placeholder="add new task"
                        />
                    <Fieldz>  
                        <button onClick={this.addToDo}>Add new Task</button>
                        <button onClick={this.deleteCompleted}>Delete Completed tasks</button>
                    </Fieldz>
                </Wrapperz>
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