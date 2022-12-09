import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

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
        await fetch(`/clients/${id}`, {
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
                <div className={"placeholder"}></div>
            )
        });

        return (
            <div className={"placeholder"}>
                <AppNavbar />

            </div>
        )
    }
}
export default TaskList;