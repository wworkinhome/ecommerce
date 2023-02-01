import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const AppNavbar = () => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  }

  return (
    <Navbar expand="lg" variant="dark" bg="primary" size="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"> E-commerce </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">Ingresar</Nav.Link>
            <Nav.Link as={Link} to="/purchases">Mis Compras</Nav.Link>
            <Nav.Link>Carrito (sidebar)</Nav.Link>
            <Nav.Link as={Link} to="/car">Carrito</Nav.Link>
            <Nav.Link>Carrito (sidebar)</Nav.Link>
            <Nav.Link onClick={logout}>Salir</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;