import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

class SignUp extends Component {
    componentDidMount() {
        document.title = "Sign Up";
    }

    render() {
        return (
            <div className={"placeholder"}>
                <AppNavbar />

                <Container>
                    <div style={{ padding: 3 }}>
                        <Form.Label style={{ padding: 3 }}>Username</Form.Label>
                        <Form.Control
                        />

                    </div>
                    <div style={{ padding: 3 }}>
                        <Form.Label style={{ padding: 3 }}>Email</Form.Label>
                        <Form.Control
                        />

                    </div>
                    <div style={{ padding: 3 }}>
                        <Form.Label htmlFor="inputPassword5" style={{ padding: 3 }}>Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />
                    </div>
                    <Link tag={Link} to="/login">
                        <Button className="navItem"> Login </Button>
                    </Link>
                    <Link tag={Link} to="/tasks">
                        <Button className="navItem"> Tasks</Button>
                    </Link>
                </Container>
            </div>
        );
    }
}
export default SignUp;