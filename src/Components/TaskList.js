import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Container, Table } from "reactstrap";

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

    async complete(taskID) {
        await fetch(`/task/${taskID}?completingUserId=7`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
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
                <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>
                        <input type="checkbox" name={"taskName"}
                               onChange={() => this.complete(task.id)}
                            defaultChecked={task.status === "COMPLETED"}></input>
                    </td>
                    <td>{task.name}</td>
                    <td>{task.storyPoints}</td>
                    <td>
                        <Link className={'px-2'} to={`/tasks/${task.id}`}>
                            <Button type={"button"}>Edit</Button>
                        </Link>
                        <Button className={'px-2'} onChange={() => this.remove(task.id)}>Delete</Button>
                    </td>
                </tr>
            )
        });

        return (
            <Container>
                <h3>Tasks</h3>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID #</th>
                        <th>Completed?</th>
                        <th>Name</th>
                        <th>Story Points</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {taskList}
                    </tbody>
                </Table>
                <Link to={"/"}>
                    <Button>Home</Button>
                </Link>
            </Container>
        )
    }
}

export default TaskList;