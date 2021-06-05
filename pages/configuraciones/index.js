import DefaultLayout from "components/layouts/DefaultLayout";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Index.module.css";
import { Form, Button, Navbar, Alert } from "react-bootstrap";
import Image from "react-bootstrap/Image";
function Configuraciones() {
  return (
    <DefaultLayout>
      <Navbar bg="warning" className="justify-content-center">
        <Navbar.Brand></Navbar.Brand>
      </Navbar>
      <h1>Configuraciones</h1>
      <Container className={styles.lay} fluid="md">
        <Row>
          <Col>
            <Button className={styles.button} variant="outline-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="currentColor"
                class="bi bi-person-fill"
                viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </Button>{" "}
          </Col>
          <Col>
            <Button className={styles.button} variant="outline-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="currentColor "
                class="bi bi-info-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
            </Button>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className={styles.button} variant="outline-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="currentColor"
                class="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
            </Button>{" "}
          </Col>
          <Col>
            <Button className={styles.button} variant="outline-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="currentColor"
                class="bi bi-key-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
}

export default Configuraciones;
