import React from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/General.css';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg" className="navbar-custom">
        <Container className="me-auto gap-3 text-center">
          <Navbar.Brand as={Link} to="/" className="nav-custom1 align-items-center justify-content-center">Bienvenido</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/ProductList">Productos</Nav.Link>
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            <Nav.Link as={Link} to="/Register">Registro</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;