import React, { Component } from 'react';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [] };
        this.remove = this.remove.bind(this);
    }

    async componentDidMount() {
        await fetch('/task')
            .then(response => response.json())
            .then(data => this.setState({ tasks: data }));
    }

    async remove(id) {
        await fetch(`/task/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedTasks = [...this.state.tasks].filter(i => i.id !== id);
            this.setState({ tasks: updatedTasks });
        });
    }

    render() {
        const { tasks, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const taskList = tasks.map(task => {
            // An item returned for each task found.
            return (
                <div className={"placeholder"}>
                    <label>
                        <input type="checkbox"></input>
                        {task.name}
                        <button onClick={() => this.remove(task.id)}>Delete</button>
                    </label>
                </div>
            )
        });

        return (
            <div className={"placeholder"}>
                <h3>Tasks</h3>
                {taskList}
            </div>
        )
    }
}
export default TaskList;