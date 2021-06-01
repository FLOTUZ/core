const { default: NavBar } = require("@common/NavBar");
import { Col, Row } from "react-bootstrap";
import styles from "./DefaultLayout.module.css";

import "react-pro-sidebar/dist/css/styles.css";

function DefaultLayout(props) {
  return (
    <>
      <Row className={styles.row}>
        <NavBar />
        <Col md="auto" className={styles.menu}></Col>

        <Col className={styles.main}>{props.children}</Col>
      </Row>
    </>
  );
}

export default DefaultLayout;
