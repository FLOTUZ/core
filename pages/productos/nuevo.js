import NavBar from "@common/NavBar";

import {
  Breadcrumb,
  Button,
  Row,
  Col,
  Container,
  Form,
  Card,
  Image,
} from "react-bootstrap";

function Nuevo() {
  return (
    <>
      <NavBar />
      <Breadcrumb>
        <Breadcrumb.Item href="/productos">Productos</Breadcrumb.Item>
        <Breadcrumb.Item active>Nuevo</Breadcrumb.Item>
      </Breadcrumb>

      <Container fluid>
        <Row>
          <Col>
            <Button variant="primary">Guardar</Button>{" "}
            <Button variant="outline-danger">Descartar</Button>{" "}
          </Col>

          <Col lg="1">
            <Button variant="outline-success">Publicar</Button>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <Card style={{ width: "auto" }}>
              <Card.Body>
                <Row>
                  <Col>
                    <Form>
                      <Form.Label>Nombre de producto</Form.Label>
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Nombre de producto"
                      />
                      <Form.Label>Nombre de producto en aspel</Form.Label>
                      <Form.Control type="text" placeholder="Nombre de producto en aspel" />
                    </Form>
                  </Col>
                  <Col>
                  <Image
                      src="../headphones.jpg"
                      alt="Audifonos Unsplash"
                      thumbnail="true"
                      height='100px'
                      width='109px'
                      rounded
                    />
                    <Form.File/>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Nuevo;