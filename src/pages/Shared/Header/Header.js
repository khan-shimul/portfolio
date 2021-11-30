import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className="header" sticky="top" collapseOnSelect expand="lg">
            <Container className="menu">
                <Navbar.Brand as={NavLink} to="/" className="text-white">
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
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link as={NavLink} to="/blogs">Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;