import Link from "next/link";
import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

const HeaderHome = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Link href="/jogar">
        <Navbar.Brand>Jogar</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as="a">INICIO</Nav.Link>
          <Nav.Link as="a">PERFIL</Nav.Link>
          <Nav.Link as="a">COLEÇÃO</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link as="a">ESPÓLIO</Nav.Link>
          <Nav.Link as="a">LOJA</Nav.Link>
          <Nav.Link as="a">COLEÇÃO</Nav.Link>
          <Nav.Item>
            <span>EA</span>
            <span>1000</span>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      <Button>X</Button>
    </Navbar>
  );
};

export default HeaderHome;
