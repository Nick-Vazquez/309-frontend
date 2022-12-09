import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';



class Login extends Component {
    render() {
        return (
            <div className={"placeholder"}>
                <AppNavbar />

                <Container>
                    <div style={{ padding: 3 }}>
                        <Form.Label htmlFor="inputPassword5" style={{ padding: 3 }}>Username</Form.Label>
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
                </Container>
            </div>
        );
    }
}
export default Login;