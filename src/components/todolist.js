import _ from 'lodash'
import React, {Component} from "react"

import TodoListHeader from './todolist-header'
import TodoListItem from './todolist-item'

class TodoList extends Component {
    renderItems() {
        const props = _.omit(this.props, 'todos');

        return _.map(this.props.todoTasks, (todo, index) => <TodoListItem key={index} {...todo} {...props} />);
    }

    render() {
        // console.log(this.props.todoTasks);

        return(
            // Create table
            <table>
                <TodoListHeader />
                <tbody>
                    { this.renderItems() }
                </tbody>
            </table>
        );
    }
}

export default TodoList