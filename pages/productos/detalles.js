
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
 } from "react-bootstrap";

function Detalles() {
    return (
        <DefaultLayout>
            <Breadcrumb>
                <Breadcrumb.Item href="/productos">Productos</Breadcrumb.Item>
                <Breadcrumb.Item active>detalles</Breadcrumb.Item>
            </Breadcrumb>

            <Container>
                <Row>
                    <Col>
                    <Button variant="primary">Guardar</Button> {" "}
                    <Button variant="outline-danger">Descartar</Button> {" "} {" "}
                    <Button variant="outline-success">Publicar</Button> 
                    </Col>
                </Row>

                <br/>

            
            <Row>
                <Col>
                    <Card style={{ width: "auto" }}>
                    <Card.Body>
                        <Row>
                        <Col>
                            <Form>
                            <Form.Label>Nombre de producto</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre de producto"
                            />
                            <Form.Label>Nombre de producto en aspel</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre de producto en aspel"
                            />
                            </Form>
                        </Col>
                        <Col>
                            <Image
                            src="../headphones.jpg"
                            alt="Audifonos Unsplash"
                            thumbnail="true"
                            height="100px"
                            width="109px"
                            rounded
                            />
                            <Form.File />
                        </Col>
                        </Row>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>

        <br/>

        <Container>
            <Row>
                <Col>
                    <Card style={{ width: "auto" }}>
                        <Card.Body>
                            <Row>
                                <Col> <div> <Button variant="light">Información general</Button> </div> </Col>
                                <Col> <div> <Button variant="light">Variantes</Button></div> </Col>
                                <Col> <div> <Button variant="light">Inventario</Button> </div> </Col>
                                <Col> <div> <Button variant="light">Publicaciones</Button> </div> </Col>
                            </Row>
                             <br/>
                             <Col>
                                <Row>
                                    <div>
                                        <Form>
                                            <Form.Label>Text label</Form.Label>
                                                <select  class="form-control">
                                                    <option>Producto/Servicio/Kit/Grupo de productos</option>
                                                    <option>....</option>
                                                </select>  
                                        </Form>
                                    </div>
                                    <Col>
                                        <div>
                                            <Form>            
                                                <Form.Label>Precio de venta</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="$0.00"/>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <div>
                                        <Form>
                                            <Form.Label>Categorías del producto</Form.Label>
                                                <select  class="form-control ds-input">
                                                    <option>Todos/Audio/Audifonos</option>
                                                    <option>....</option>
                                                </select>  
                                        </Form>
                                    </div>
                                    <Col>
                                        <div>
                                            <Form>            
                                                <Form.Label>Unidad de medida</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="PZ"/>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <div>
                                        <Form>            
                                            <Form.Label>Clave interna</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Sin texto"/>
                                        </Form>
                                    </div>
                                    <Col>
                                        <div>
                                            <Form>            
                                                <Form.Label>Unidad de medida de compra</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="PZ"/>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Example textarea</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                </Row>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container> 

        </DefaultLayout>
    );
}

export default Detalles;