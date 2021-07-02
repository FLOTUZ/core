import Footer from "@common/Footer";
import styles from "../styles/Home.module.css";

import { useState } from "react";
import { Form, Button, Navbar, Alert } from "react-bootstrap";

export default function Login() {

  //Manejador de estado de los inputs
  const [msg, setMsg] = useState("");

  //Manejador de estado de mi login
  const [loginData, setLoginData] = useState({
    userMail: "",
    userPassword: "",
  });

  //Manejador de cambio en las cajas de texto
  const handleInputChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  //Se verifica el usuario
  const userVerification = (event) => {
    event.preventDefault();
    console.log("Hola bb");

    {/* Acá llamamos a la api de atenticación*/}

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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
              href="/Dashboard"
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
