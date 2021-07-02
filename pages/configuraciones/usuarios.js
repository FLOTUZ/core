import Table from "react-bootstrap/Table";
import React from "react";
import styles from "./Index.module.css";
import Button from "react-bootstrap/Button";
import { Breadcrumb } from "react-bootstrap";
const axios = require("axios");

function Usuarios() {
  const traerDatos = async () => {
    await axios({
      method: "get",
      url: "https://api-the-core.herokuapp.com/usuarios",
    })
      .then((response) => {
        response.data.results;
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {console.log(traerDatos())}
      <Breadcrumb>
        <Breadcrumb.Item href="/configuraciones">
          Configuraciones
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Bitacora de Usuarios</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Usuarios</h1>
      <Table hover>
        <thead className="thead-dark">
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Estatus</th>
            <th>Ultima Conexion</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Josep</td>
            <td>Administrador</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-circle-fill text-success"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
              Activo
            </td>
            <td>DD/MM/YY </td>
            <td>
              <Button variant="outline-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  <span className="visually-hidden">Button</span>
                </svg>
              </Button>{" "}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
export default Usuarios;
