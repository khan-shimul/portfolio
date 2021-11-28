import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className="header">
            <Container>
                <Navbar.Brand href="#home" className="text-white">Shimul</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home" className="menu">About</Nav.Link>
                        <Nav.Link href="#home" className="menu">Skills</Nav.Link>
                        <Nav.Link href="#home" className="menu">Portfolio</Nav.Link>
                        <Nav.Link href="#home" className="menu">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;