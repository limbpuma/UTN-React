import React from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/General.css';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-custom">
      <Container className="me-auto gap-4 text-center">
        <Navbar.Brand as={Link} to="/" className="nav-brand-custom">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/ProductList">Productos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/producto/alta">Alta</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/producto/alta">Editar</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/producto/alta">Borrar</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            <Nav.Link as={Link} to="/Register">Registro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;