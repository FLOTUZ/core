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
  Table,
} from "react-bootstrap";
import Papa from "papaparse";
import React, { useState } from "react";

function Importar() {
    const [csv, setCsv] = useState(null);
    let temp = "";

    const subirCsv=e=>{
      setCsv(e);
    }
  
    const imprimir=()=>{
      console.log(csv[0]);
  
      Papa.parse(csv[0], {
        complete: function(results) {
          //console.log(results);
          temp = results.data;
          console.log(temp);
        }
      });
    }

    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Item href="/productos">Productos</Breadcrumb.Item>
          <Breadcrumb.Item active>Importar</Breadcrumb.Item>
        </Breadcrumb>
  
        <Container>
          <Row>
            <Col>
              <div>
                <input variant="outline-warning" type="file" name="files" multiple onChange={(e)=>subirCsv(e.target.files)} />      
                <Button variant="outline-success" onClick={()=>imprimir()} >Subir </Button>
              </div>
              <Button variant="outline-success">Cargar nuevo archivo</Button>{" "}
              <Button variant="danger">Cancelar</Button>
            </Col>
          </Row>
  
          <br />
        </Container>
  
        <br />

        <Table striped bordered hover>
            <thead>
                <tr>
                <th>
                    <Col>
                        <Form>
                            <Form.Label>Id externo</Form.Label>
                                <select className="form-control ds-input" readOnly>
                                <option>Id...</option>
                                <option>....</option>
                                </select>
                        </Form>
                    </Col>
                </th>
                <th>
                    <Col>
                         <Form>
                            <Form.Label>Nombre</Form.Label>
                                <select className="form-control ds-input" readOnly>
                                <option>Nombre...</option>
                                <option>....</option>
                                </select>
                        </Form>
                    </Col>
                </th>
                <th>
                    <Col>
                        <Form>
                            <Form.Label>Existencias</Form.Label>
                                <select className="form-control ds-input" readOnly>
                                <option>Tipo...</option>
                                <option>....</option>
                                </select>
                        </Form>
                    </Col>
                </th>
                <th>
                    <Col>
                        <Form>
                            <Form.Label>Clave</Form.Label>
                                <select className="form-control ds-input" readOnly>
                                <option>Referencia...</option>
                                <option>....</option>
                                </select>
                        </Form>
                    </Col>
                </th>
                <th>
                    <Col>
                        <Form>
                            <Form.Label>Línea</Form.Label>
                                <select className="form-control ds-input" readOnly>
                                <option>Código...</option>
                                <option>....</option>
                                </select>
                            </Form>
                    </Col>
                </th>
                <th>
                    <Col>
                        <Form>
                            <Form.Label>Moneda</Form.Label>
                                <select className="form-control ds-input" readOnly>
                                <option>$...</option>
                                <option>....</option>
                                </select>
                            </Form>
                    </Col>
                </th>
                <th>
                    <Col>
                        <Form>
                            <Form.Label>Clave Unica</Form.Label>
                                <select className="form-control ds-input" readOnly>
                                <option>Peso...</option>
                                <option>....</option>
                                </select>
                        </Form>
                    </Col>
                </th>
                </tr>
            </thead>
            <Tabla temp/>
        </Table>
    
  
      </>
    );
  }

  function Tabla(datos){
    let cont = 1;
    let size = datos.lenght;
    let mostrar = "";
    if(size!=null){
        while(cont < size){
            mostrar = "<tr><th>"+datos[cont][0]+"</th><th>"+datos[cont][2]+"</th><th>"+datos[cont][3]+"</th><th>"+datos[cont][1]+"</th><th>"+datos[cont][4]+"</th><th>"+datos[cont][8]+"</th><th>"+datos[cont][11]+"</th></tr>";
            return(
                <tbody>
                    {mostrar}
                </tbody>
            );
            cont++;
        }
    }else{
        return(
            <tbody>
            </tbody>
        );
    }
  }

  function CSVfiles(){
    const [csv, setCsv] = useState(null);

    const subirCsv=e=>{
      setCsv(e);
    }
  
    const imprimir=()=>{
      console.log(csv[0]);
  
      Papa.parse(csv[0], {
        complete: function(results) {
          console.log(results);
        }
      });
    }
    
    return(
      <div>
        <input variant="outline-warning" type="file" name="files" multiple onChange={(e)=>subirCsv(e.target.files)} />      
        <Button variant="outline-success" onClick={()=>imprimir()} >Subir </Button>
      </div>
      
    );
    
  }

  export default Importar;