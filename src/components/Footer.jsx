import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <div className="margen">
    <footer className="bg-light py-3 font-weight-bold fs-2 ">
      <Container className="footer-custom d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Mi Sitio Web</p>
        <Nav className="mb-3 mb-md-0">
          <Nav.Item >
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/ProductList">Productos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/Register">Registro</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </footer>
    </div>
  );
}

export default Footer;
