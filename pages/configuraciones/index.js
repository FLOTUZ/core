import DefaultLayout from "components/layouts/DefaultLayout";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Index.module.css";
import { Form, Button, Navbar, Alert } from "react-bootstrap";
import Link from "next/link";
import { Breadcrumb } from "react-bootstrap";

function Configuraciones() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item active>
          
          Configuraciones
        </Breadcrumb.Item>
      </Breadcrumb>
      <h1>Configuraciones</h1>
      <Container className={styles.container} fluid="md">
        <Row>
          <Col>
            <Link href="/configuraciones/usuarios">
              <a>
                <Button className={styles.button} variant="outline-warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    fill="currentColor"
                    className="bi bi-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  <h3>Usuarios</h3>
                </Button>{" "}
              </a>
            </Link>
          </Col>
          <Col>
            <Link href="/configuraciones/informacion">
              <a>
                <Button className={styles.button} variant="outline-warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    fill="currentColor "
                    className="bi bi-info-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                  </svg>
                  <h3>Informacion del sistema</h3>
                </Button>{" "}
              </a>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link href="/configuraciones/notificaciones">
              <a>
                <Button className={styles.button} variant="outline-warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    fill="currentColor"
                    className="bi bi-bell-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
                  <h3>Notificaciones</h3>
                </Button>{" "}
              </a>
            </Link>
          </Col>
          <Col>
            <Link href="/configuraciones/seguridad">
              <a>
                <Button className={styles.button} variant="outline-warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    fill="currentColor"
                    className="bi bi-shield-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                  </svg>
                  <h3>Seguridad</h3>
                </Button>{" "}
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Configuraciones;
