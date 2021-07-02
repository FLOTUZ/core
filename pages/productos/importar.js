import DefaultLayout from "components/layouts/DefaultLayout";
import {
  Breadcrumb,
  Button,
  Row,
  Col,
  Container,
  Form,
  Card,
  Image,
  Tab,
  Nav,
  Tabs,
} from "react-bootstrap";

function Importar() {
    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Item href="/productos">Productos</Breadcrumb.Item>
          <Breadcrumb.Item active>Importar</Breadcrumb.Item>
        </Breadcrumb>
  
        <Container>
          <Row>
            <Col>
              <Button variant="outline-primary">Importar</Button>{" "}
              <Button variant="outline-warning">Test</Button>{" "}
              <Button variant="outline-success">Cargar nuevo archivo</Button>{" "}
              <Button variant="danger">Cancelar</Button>
            </Col>
          </Row>
  
          <br />
        </Container>
  
        <br />

       <Row>
            <Col>
        
                <Card border="secondary" style={{ width: "auto" }}>
                    <Card.Body>
                        <Row>

                            <Col>
                                <Form>
                                    <Form.Label>Id externo</Form.Label>
                                    <select className="form-control ds-input" readOnly>
                                    <option>Id externo...</option>
                                    <option>....</option>
                                    </select>
                                </Form>
                            </Col>

                            <Col>
                                <Form>
                                    <Form.Label>Nombre</Form.Label>
                                    <select className="form-control ds-input" readOnly>
                                    <option>Nombre...</option>
                                    <option>....</option>
                                    </select>
                                </Form>
                            </Col>

                            <Col>
                                <Form>
                                    <Form.Label>Tipo de producto</Form.Label>
                                    <select className="form-control ds-input" readOnly>
                                    <option>Tipo de producto...</option>
                                    <option>....</option>
                                    </select>
                                </Form>
                            </Col>

                            <Col>
                                <Form>
                                    <Form.Label>Referencia interna</Form.Label>
                                    <select className="form-control ds-input" readOnly>
                                    <option>Referencia interna...</option>
                                    <option>....</option>
                                    </select>
                                </Form>
                            </Col>

                            <Col>
                                <Form>
                                    <Form.Label>Código de barras</Form.Label>
                                    <select className="form-control ds-input" readOnly>
                                    <option>Código de barras...</option>
                                    <option>....</option>
                                    </select>
                                </Form>
                            </Col>

                            <Col>
                                <Form>
                                    <Form.Label>Costo</Form.Label>
                                    <select className="form-control ds-input" readOnly>
                                    <option>$ Costo...</option>
                                    <option>....</option>
                                    </select>
                                </Form>
                            </Col>

                            <Col>
                                <Form>
                                    <Form.Label>Peso</Form.Label>
                                    <select className="form-control ds-input" readOnly>
                                    <option>Peso...</option>
                                    <option>....</option>
                                    </select>
                                </Form>
                            </Col>
                        </Row>


                    </Card.Body>
                </Card>
            </Col>
        </Row> 
    
  
      </>
    );
  }
  export default Importar;