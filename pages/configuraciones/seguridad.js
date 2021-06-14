import React from "react";
import styles from "./Index.module.css";
import { Breadcrumb } from "react-bootstrap";

function Seguridad() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/configuraciones">
          Configuraciones
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Seguridad</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Seguridad</h1>
    </>
  );
}
export default Seguridad;
