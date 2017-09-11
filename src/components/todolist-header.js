import React, {Component} from "react"

class TodoListHeader extends Component {
    render() {
        return(
            // Create table
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Action</th>
                </tr>
            </thead>
        );
    }
}

export default TodoListHeader