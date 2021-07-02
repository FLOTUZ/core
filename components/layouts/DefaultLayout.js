const { default: NavBar } = require("@common/NavBar");
import { Col, Row } from "react-bootstrap";
import styles from "./DefaultLayout.module.css";
import { useWindowSize } from "react-use";

function DefaultLayout(props) {
  const { width, height } = useWindowSize();
  height
  return (
    <>
      <Row className={styles.row} style={{ height: "100em" }}>
        <Col md="auto" className={styles.nav}>
          <NavBar />
        </Col>
        <Col className={styles.main}>{props.children}</Col>
      </Row>
    </>
  );
}

export default DefaultLayout;
