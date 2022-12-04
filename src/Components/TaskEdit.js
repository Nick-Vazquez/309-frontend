import React, { Component } from 'react';
import {Link, useParams, withRouter} from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

class TaskEdit extends Component {

    emptyTask = {
        'id': '',
        'name': '',
        'status': '',
        'storyPoints': '',
        'owner': ''
    }

    constructor(props) {
        super(props);
        this.state = {
            model: this.emptyTask
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const task = await (await fetch(`/task/
            ${this.props.match.params.id}`)).json();
            this.setState({model: task})
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let model = {...this.state.model};
        model[name] = value;
        this.setState({model});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item: model} = this.state;

        await fetch('/task' + (model.id ? '/' + model.id : ''), {
            method: (model.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(model),
        });
        this.props.history.push('/tasks');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Task' : 'Add Task'}</h2>;

        return <div className={'placeholder'}></div>
    }
}

export default TaskEdit;