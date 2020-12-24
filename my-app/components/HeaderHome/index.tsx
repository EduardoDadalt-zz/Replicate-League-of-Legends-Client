import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { Button, Modal, Nav, Navbar } from "react-bootstrap";
import { Auth } from "../../context/auth";
import styles from "./HeaderHome.module.css";
const HeaderHome = () => {
  const { setIsLoggin } = useContext(Auth);
  const [logoutShowModal, setLogoutShowModal] = useState(false);
  const openLogoutModal = () => setLogoutShowModal(true);
  const closeLogoutModal = () => setLogoutShowModal(false);
  const [iconModal, setIconModal] = useState(false);
  const [status, setStatus] = useState({
    text: "",
    online: true,
    default: "Online",
  });
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/jogar">
          <Navbar.Brand>Jogar</Navbar.Brand>
        </Link>
        <Nav>
          <Nav.Link as="a">INICIO</Nav.Link>
          <Nav.Link as="a">PERFIL</Nav.Link>
          <Nav.Link as="a">COLEÇÃO</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as="a">ESPÓLIO</Nav.Link>
          <Nav.Link as="a">LOJA</Nav.Link>
          <Nav.Link as="a">COLEÇÃO</Nav.Link>
          <Nav.Item style={{ display: "flex", flexDirection: "column" }}>
            <span>RP 60</span>
            <span>EA 1000</span>
          </Nav.Item>
        </Nav>
        <Nav className="">
          <div>
            <Image
              onClick={() => setIconModal(true)}
              height={80}
              width={80}
              className=""
              src="/iconsUser/default.jpg"
            />
          </div>
          <div>
            <span>Name</span>
            <div>
              <input type="checkbox" className={styles.checkboxStatus} />
              <input
                type="text"
                className={
                  status.online ? styles.textOnline : styles.textAbsent
                }
                placeholder={!!status.text ? status.text : status.default}
              />
            </div>
          </div>
        </Nav>
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
      {/* Icon modal */}
      <Modal show={iconModal} onHide={() => setIconModal(false)}>
        <Modal.Header>Icons</Modal.Header>
        <Modal.Body>Your icons </Modal.Body>
      </Modal>
    </>
  );
};

export default HeaderHome;
