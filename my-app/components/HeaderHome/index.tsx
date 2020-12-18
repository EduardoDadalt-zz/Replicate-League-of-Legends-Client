import Link from "next/link";
import React, { useContext, useState } from "react";
import { Button, Modal, Nav, Navbar } from "react-bootstrap";
import { Auth } from "../../context/auth";

const HeaderHome = () => {
  const { setIsLoggin } = useContext(Auth);
  const [logoutShowModal, setLogoutShowModal] = useState(false);
  const openLogoutModal = () => setLogoutShowModal(true);
  const closeLogoutModal = () => setLogoutShowModal(false);
  return (
    <>
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
        <Button onClick={openLogoutModal}>X</Button>
      </Navbar>
      <Modal show={logoutShowModal} onHide={closeLogoutModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Deseja Sair?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button>Sair</Button>
          <Button
            onClick={() => {
              setIsLoggin(false);
            }}
          >
            Encerrar Sessão
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HeaderHome;
