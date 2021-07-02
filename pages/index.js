import Footer from "@common/Footer";
import styles from "../styles/Home.module.css";

import { useState } from "react";
import { Form, Button, Navbar, Alert } from "react-bootstrap";
const axios = require("axios");

export default function Login() {
  //Manejador de estado de los inputs
  const [msg, setMsg] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Se verifica el usuario
  const userVerification = (event) => {
    event.preventDefault();

    axios({
      method: "post",
      url: "https://api-the-core.herokuapp.com/login",
      body: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });

    setMsg(<Alert variant="danger">Oops! Los datos son incorrectos</Alert>);
  };

  return (
    <>
      <Navbar bg="warning" className="justify-content-center">
        <Navbar.Brand>CORE</Navbar.Brand>
      </Navbar>
      <div className={styles.container}>
        <main className={styles.main}>
          {msg}
          <Form onSubmit={userVerification}>
            <Form.Group>
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onClick={() => setMsg("")}
                type="email"
                placeholder="Ingresa el Email"
              />
              <Form.Text className="text-muted">
                Texto para verificar si es correcto o incorrecto
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onClick={() => setMsg("")}
                type="password"
                placeholder="Contraseña"
              />
            </Form.Group>

            <Form.Group>
              <Form.Check type="checkbox" label="Recuerdame" />
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              type="submit"
              size="lg"
              block
            >
              Ingresar
            </Button>
          </Form>
        </main>
        <Footer />
      </div>
    </>
  );
}
