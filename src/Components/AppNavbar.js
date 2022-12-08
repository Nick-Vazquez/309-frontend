import React, { Component } from 'react';
import { Container, Nav, Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';


import "./css/AppNavbar.css"

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <Navbar color="dark" dark expand="md">
            <Container style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <NavbarBrand className="navTitle" tag={Link} to="/">Touching Grass</NavbarBrand>
                <Nav fixed="top" >
                    <Link tag={Link} to="/login">
                        <Button className="navItem"> Login </Button>
                    </Link>
                    <Link tag={Link} to="/tasks">
                        <Button className="navItem"> Tasks</Button>
                    </Link>
                </Nav>
            </Container>
        </Navbar>;
    }
}