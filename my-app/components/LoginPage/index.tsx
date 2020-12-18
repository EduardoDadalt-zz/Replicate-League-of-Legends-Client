import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useContext, useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";

import Att from "../Att";

import { Auth } from "../../context/auth";
import Styles from "../../styles/Home.module.css";

interface handleChangeProps {
  target: { name: string; value: string };
}
const LoginPage = () => {
  const { setIsLoggin } = useContext(Auth);
  const [form, setForm] = useState({
    username: "",
    password: "",
    staySingedIn: "false",
  });
  const handleChange = (e: handleChangeProps) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmitEvent = (e: FormEvent) => {
    e.preventDefault();
    setIsLoggin(true);
  };
  return (
    <div className={Styles.home_container}>
      <Head>
        <title>Login</title>
      </Head>
      <Container fluid className="m-0 p-0">
        <Row className="vw-100 vh-100 m-0">
          <Col md={3}>
            <Container>
              <Navbar className="d-flex align-items-center justify-content-between">
                <Navbar.Brand>L</Navbar.Brand>
                <NavDropdown id="collasible-nav-dropdown" title="PBE">
                  <NavDropdown.Item>BR</NavDropdown.Item>
                </NavDropdown>
              </Navbar>
            </Container>
            <Container className="mt-5">
              <Form method="POST" onSubmit={handleSubmitEvent}>
                <h1 style={{ fontWeight: 900 }}>SING IN</h1>
                <Form.Group>
                  <Form.Control
                    placeholder="Username"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Check
                  type="checkbox"
                  label="STAY SINGNED IN?"
                  name="staySingedIn"
                />
                <Form.Group className="d-flex justify-content-between">
                  <Button type="submit">Entrar como Convidado</Button>
                  <Button type="submit" variant="danger">
                    Entrar
                  </Button>
                </Form.Group>
              </Form>
            </Container>

            <Container style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Link href="/register">
                  <a style={{ color: "var(--gray)" }}>Create account</a>
                </Link>

                <Link href="/register">
                  <a style={{ color: "var(--gray)" }}>Can't sing in?</a>
                </Link>
              </div>

              <div
                style={{
                  flex: 1,
                }}
                className="center"
              >
                <span>v1.0</span>
              </div>
            </Container>
          </Col>

          <Col md={9} className="bg-dark text-white">
            <Image
              layout="fill"
              src="/loginscreen img.jpg"
              objectFit="cover"
              objectPosition="0 70%"
            />
            <Att />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
