import Head from "next/head";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import Att from "../component/Att";
import Image from "next/image";
import Styles from "../styles/Home.module.css";
import fetcher from "../config/axios";
export default function Home() {
  const [form, setForm] = useState({ username: "", password: "" });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmitEvent = (e: FormEvent) => {
    e.preventDefault();
    fetcher
      .post("/api/hello", { ...form })
      .then((e) => {
        console.log(e.data);
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className={Styles.home_container}>
      <Head>
        <title>Login</title>
      </Head>
      <Container fluid className="m-0 p-0">
        <Row className="vw-100 vh-100 m-0">
          <Col sm={3}>
            <Container>
              <Navbar>
                <Navbar.Brand>L</Navbar.Brand>
                <NavDropdown id="collasible-nav-dropdown" title="PBE">
                  <NavDropdown.Item>BR</NavDropdown.Item>
                </NavDropdown>
              </Navbar>
            </Container>
            <Container>
              <Form onSubmit={handleSubmitEvent}>
                <h1>SING IN</h1>
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
                <Form.Check label="STAY SIGNED IN"></Form.Check>
                <Form.Group className="d-flex ">
                  <Button type="submit" variant="danger">
                    Entrar
                  </Button>
                </Form.Group>
              </Form>
            </Container>
          </Col>

          <Col sm={9} className="bg-dark text-white">
            <Image layout="fill" src="/loginscreen img.jpg" objectFit="cover" />
            {/* <Att></Att> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
