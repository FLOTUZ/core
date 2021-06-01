import DefaultLayout from "components/layouts/DefaultLayout";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./Index.module.css";

function Configuraciones() {
  return (
    <DefaultLayout>
      <Container className={styles.lay} fluid="md">
        <Row>
          <Col>
            <button className={styles.button}>
                Usuarios
            </button>
          </Col>
          <Col>
            <button className={styles.button}>
                Usuarios
            </button>
          </Col>
        </Row>
        <Row>
        <Col>
            <button className={styles.button}>
                Usuarios
            </button>
          </Col>
          <Col>
            <button className={styles.button}>
                Usuarios
            </button>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
}

export default Configuraciones;
