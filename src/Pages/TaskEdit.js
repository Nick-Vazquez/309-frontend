import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from "../Components/AppNavbar";

const TaskEdit = () => {

    let { id } = useParams();
    const navigate = useNavigate();

    const [model, setModel] = useState(
        {
            id: '',
            name: '',
            status: '',
            storyPoints: '',
            ownerId: 7
        }
    );

    const fetchTask = async (taskID) => {
        const data = await fetch(`/task/${taskID}`)
            .then((resp) => resp.json());
        data['ownerId'] = 7;
        setModel(data);
    }

    // ComponentDidMount
    useEffect(() => {
        if (id !== 'new') {
            fetchTask(id);
        }
    }, [id]);

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let newModel = {...model};
        if (name === "storyPoints") {
            newModel[name] = parseInt(value);
        } else {
            newModel[name] = value;
        }
        setModel(newModel);
        console.log(newModel);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await fetch('/task', {
            method: (model.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(model),
        });
        navigate('/tasks');
    }

    const title = <h2>{model.id ? 'Edit Task' : 'Add Task'}</h2>;

    return (
        <div className={'placeholder'}>
            <AppNavbar />
            <Container>
                {title}
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={model.name || ''}
                               onChange={handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="status">Status</Label>
                        {/*  Make a dropdown here to select status  */}
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Story Points</Label>
                        <Input type="number" name="storyPoints"
                               id="storyPoints" value={model.storyPoints || ''}
                               onChange={handleChange} autoComplete="range"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/clients">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
}

export default TaskEdit;