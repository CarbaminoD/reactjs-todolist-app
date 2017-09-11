import React, { Component } from 'react';
import _ from 'lodash'
// import logo from './logo.svg';
import './App.css';

import Header from './components/header'
import CreateTodo from './components/create-todo'
import TodoList from './components/todolist'
import Footer from './components/footer'

const todoTasks = [
    {
        task: 'Make ToDo List App',
        isCompleted: false
    },
    {
        task: 'Booking AirBNB',
        isCompleted: true
    },
    {
        task: 'Buy Kansai train ticket',
        isCompleted: true 
    }
];

class App extends Component {
    constructor(props) {
        super(props)
            
        this.state = {
            todoTasks
        };
    }

    render() {
        return (
            <div>
                <Header />
                <CreateTodo 
                    todoTasks = { this.state.todoTasks }
                    createTask = { this.createTask.bind(this) }
                />
                <TodoList 
                    todoTasks = { this.state.todoTasks }
                    toggleTask = { this.toggleTask.bind(this) }
                    saveTask = { this.saveTask.bind(this) }
                    deleteTask = { this.deleteTask.bind(this) }
                />
                <Footer />
            </div>
        );
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todoTasks, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todoTasks: this.state.todoTasks });
    }

    createTask(task) {
        this.state.todoTasks.push({
            task,
            isCompleted: false
        });

        this.setState({ todoTasks: this.state.todoTasks });
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todoTasks, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todoTasks });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todoTasks, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todoTasks });
    }

}

export default App;