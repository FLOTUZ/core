

import DefaultLayout from "components/layouts/DefaultLayout";
import {
    Breadcrumb,
  Button,
  Row,
  Col,
  Container,
  Image,
} from "react-bootstrap";
import  style from "./plantilla.module.css"

function Plantilla() {
    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Item href="/productos">Productos</Breadcrumb.Item>
          <Breadcrumb.Item active>Plantilla</Breadcrumb.Item>
        </Breadcrumb>
  
        <Container>
          <Row>
            <Col>
              <Button variant="outline-primary">Cargar fichero</Button>{" "}
              <Button variant="danger">Cancelar</Button>
            </Col>
          </Row>
          <br />

       
        
        </Container>
  
        <div >
            <div className={style.title}>
                <h1 >
                Seleccione un archivo CSV O Excel para importar
                </h1>
                <h2 >
                Seleccione un archivo CSV O Excel para importar
                </h2>
            </div>
        </div>

        <div >
            <div className={style.title2}>
                <h2 >
                Seleccione un archivo CSV O Excel para importar
                </h2>
            </div>
        </div>

        
    
  
      </>
    );
  }
  export default Plantilla;