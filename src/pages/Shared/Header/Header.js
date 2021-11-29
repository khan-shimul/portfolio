import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className="header" sticky="top" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className="text-white">
                    Shimul
                    {/* <img
                        alt=""
                        src=""

                        className="d-inline-block align-top"
                    />{' '} */}

                </Navbar.Brand>
                <Navbar.Toggle className="bg-light" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav className="menu">
                        <Nav.Link to="/explore">About</Nav.Link>
                        <Nav.Link to="/explore">Skill</Nav.Link>
                        <Nav.Link to="/explore">Portfolio</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;