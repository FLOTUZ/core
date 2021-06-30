import React from "react";
import styles from "./Index.module.css";
import { Breadcrumb } from "react-bootstrap";
function Informacion() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/configuraciones">
          Configuraciones
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Informacion del sistema</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Informacion del sistema</h1>
      <div className={styles.card}>
        <h3> Amazon</h3>
        <label htmlFor="inputPassword5" className="form-label"></label>
        <input
          type="password"
          id="apiAmazon"
          className="form-control "
          placeholder="Api key Amazon"
          aria-describedby="passwordHelpBlock"
        ></input>

        <h3>Mercado Libre </h3>
        <label htmlFor="inputPassword5" className="form-label"></label>
        <input
          type="password"
          id="apiMercadoLibre"
          className="form-control"
          placeholder="Api key Mercado Libre"
          aria-describedby="passwordHelpBlock"
        ></input>

        <h3>WooComerce</h3>
        <label htmlFor="inputPassword5" className="form-label"></label>
        <input
          type="password"
          id="apiWooCommerce"
          className="form-control"
          placeholder="Api key WooCommerce"
          aria-describedby="passwordHelpBlock"
        ></input>
      </div>
    </>
  );
}

export default Informacion;
