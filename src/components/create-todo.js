import React, {Component} from "react"
import _ from 'lodash'

class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    renderError() {
        if (!this.state.error) { return null; }

        return <div style={{ color: 'red' }}>{ this.state.error }</div>
    }

    render() {
        return(
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="What do I need to do ?" ref="createInput" />
                <button>Create</button>

                { this.renderError() }
                
            </form>
        );
    }
    
    handleCreate(event) {
        // console.log(this.createInput);

        event.preventDefault();
        
        // console.log(this.refs.createInput);
        // console.log(this.refs.createInput.value);
        // console.log(this.props.createTask);

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({ error: validateInput })
            
            return;
        }

        this.setState({ error: null })
        this.props.createTask(task);
        this.refs.createInput.value = ' ';
    }

    validateInput(task) {
        if(!task) {
            return 'Please enter a task'
        }
        else if (_.find(this.props.todoTasks, todo => todo.task === task)) {
            return 'Task aready exists'
        }
        else {
            return null;
        }
    }
}

export default CreateTodo