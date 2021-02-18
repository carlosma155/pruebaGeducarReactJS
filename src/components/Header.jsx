import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.scss';

const Header = () => { 

    return (
        <React.Fragment>
            <Navbar bg="dark" expand="lg" fixed="top">
                <div className="container">
                    <Link to="/">
                        <Navbar.Brand>Geducar</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                       
                    <Nav className="ml-auto">
                        <Link to="/" className="text-contactenos btn btn-link">Hola Admin!</Link>
                        <NavDropdown title="Instituciones educativas" id="basic-nav-dropdown">
                            <NavDropdown.Item to="#action/3.1">Institución educativa La Isabela</NavDropdown.Item>
                            <NavDropdown.Item to="#action/3.2">INEM Jose Celestino Mutis</NavDropdown.Item>
                            <NavDropdown.Item to="#action/3.3">Colegio Jorge Isaacs</NavDropdown.Item>
                            <NavDropdown.Item to="#action/3.3">C.A.S.D</NavDropdown.Item>
                            <NavDropdown.Item to="#action/3.3">Centro Educativo San Bernardo</NavDropdown.Item>
                            <NavDropdown.Item to="#action/3.3">Instituto Cafeteritos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>     

                    </Navbar.Collapse>
                </div>
            </Navbar>
        </React.Fragment>        
    );
}

export default Header;