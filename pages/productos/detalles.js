
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
  Tabs,
} from "react-bootstrap";
import React, { useState, useEffect, useRef } from 'react';
import DropboxChooser from 'react-dropbox-chooser';
import  style from "./index.module.css"


function Detalles() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/productos">Productos</Breadcrumb.Item>
        <Breadcrumb.Item active>Detalles</Breadcrumb.Item>
      </Breadcrumb>

      <Container>
        <Row>
          <Col>
            <Button variant="primary">Guardar</Button>{" "}
            <Button variant="outline-danger">Descartar</Button>{" "}
            </Col>
            <Col>
              <Button className={style.buttonWC} >WooCommerce</Button>{" "}
              <Button  className={style.buttonAM}>Amazon</Button>{" "}
              <Button  className={style.buttonML}>Mercado Libre</Button>{" "}
            </Col>
          
        </Row>

        <br />

        <Row>
          <Col>
            <Card border="dark" style={{ width: "auto" }}>
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
                        readOnly
                        type="text"
                        placeholder="Nombre de producto en aspel"
                      />
                    </Form>
                  </Col>
                  <Col>
                    <Chooser/>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <br />

      <Container>
        <Card border="dark" style={{ width: "auto" }}>
          <Card.Body>
            <Tabs defaultActiveKey="profile" id="tab">
              <Tab eventKey="Tab1" title="Información general">
                <br />
                <InformacionGeneral />
              </Tab>
              <Tab eventKey="Tab3" title="Inventario">
                <br />
                <Inventario />
              </Tab>
              <Tab eventKey="Tab4" title="Publicaciones">
                <br />
                <Publicaciones />
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

function InformacionGeneral() {
  return (
    <Col>
      <Row>
        <Col>
          <Form>
            <Form.Label>Tipo de producto</Form.Label>
            <select className="form-control ds-input" readOnly>
              <option>Producto/Servicio/Kit/Grupo de productos</option>
              <option>....</option>
            </select>
          </Form>
          <Form>
            <Form.Label>Categorías del producto</Form.Label>
            <select className="form-control ds-input">
              <option>Todos/Audio/Audifonos</option>
              <option>....</option>
            </select>
          </Form>
          <Form>
            <Form.Label>Clave interna</Form.Label>
            <Form.Control type="text" placeholder="Sin texto" readOnly />
          </Form>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Descripción corta
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </Col>

        <Col>
          <Form>
            <Form.Label>Precio de venta en aspel</Form.Label>
            <Form.Control type="text" placeholder="$0.00" readOnly />
          </Form>
          <Form>
            <Form.Label>Unidad de medida</Form.Label>
            <Form.Control type="text" placeholder="PZ" readOnly />
          </Form>
          <Form>
            <Form.Label>Unidad de medida de compra</Form.Label>
            <Form.Control type="text" placeholder="PZ" readOnly />
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <TextPanel/>
        </Col>
      </Row>
    </Col>
  );
}

function Inventario() {
  return (
    <Col>
      <Row>
        <Col>
          <Form.Group controlId="largo">
            <Form.Label>Largo(m)</Form.Label>
            <Form.Control as="select" size="sm" custom>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="alto">
            <Form.Label>Alto(m)</Form.Label>
            <Form.Control as="select" size="sm" custom>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form>
            <Form.Label>Ancho</Form.Label>
            <Form.Control type="text" placeholder="cm" />
          </Form>
        </Col>
      </Row>
    </Col>
  );
}

function Publicaciones() {
  return (
    <Col>
      <Row>
        <Col>
          <Form>
            <Form.Label>Modo de envio</Form.Label>
            <select className="form-control ds-input">
              <option>No especificado</option>
              <option>....</option>
            </select>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Label>Envío gratis</Form.Label>
            <select className="form-control ds-input">
              <option>Seleccione...</option>
              <option>....</option>
            </select>
          </Form>
        </Col>
        <Col>
          <Form.Group controlId="alto">
            <Form.Label>Cantidad a publicar</Form.Label>
            <Form.Control as="select" size="sm" custom placeholder="0">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <br />
    </Col>
  );
}

function TextPanel(){
  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      // CKEditor: require('@ckeditor/ckeditor5-react'), // depricated in v3
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }
    setEditorLoaded(true)
  }, [])

  return editorLoaded ? (
    <CKEditor
      editor={ClassicEditor}
      config={{
        //toolbar: [ ['Heading'],['Bold'],['Italic'],['BulletedList'],['NumberedList'],['BlockQuote'],['Decreaseindent']]
      }}
      data='<p>Escribe aquí...</p>'
      onReady={editor => {
        // You can store the "editor" and use when it is needed.
        console.log('Editor is ready to use!', editor)
      }}
      onChange={(event, editor) => {
        const data = editor.getData()
        //console.log({ event, editor, data })
        console.log(data)
      }}
    />
  ) : (
    <div>Editor loading</div>
  )
}

function Chooser(){
  const [url, setUrl] = useState("");
  const [visible, setVisible] = useState("hidden");

  function objectChoosed(file){
    console.log(file);
    setUrl(file[0].link);
    setVisible("visible");
  }

  return(
    <div>
        <DropboxChooser 
          appKey={'mfkawx9u75a6l1k'}
          success={objectChoosed}
          multiselect={false}
          >
          <div className="dropbox-button" style={{ 
            borderStyle: "solid", borderWidth: "1px", width: "170px", textAlign:"center", borderRadius: "5px"
          }}>Imagen de dropbox</div>    
        </DropboxChooser>
        <img src={url} width="200px" height="200px" alt="" style={{visibility: visible}} />
    </div>
  );
}

export default Detalles;
