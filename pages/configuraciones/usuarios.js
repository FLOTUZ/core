import Table from "react-bootstrap/Table";
import React from "react";
import DefaultLayout from "components/layouts/DefaultLayout";
import styles from "./Index.module.css";
import Button from "react-bootstrap/Button";
import { Form, Navbar, Alert } from "react-bootstrap";

function Usuarios() {
  return (
    <DefaultLayout>
      <Navbar bg="warning" className="justify-content-center">
          <Navbar.Brand>
            <h2 class="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                fill="currentColor"
                class="bi bi-person-fill text-white"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              Usuarios
            </h2>
          </Navbar.Brand>
        </Navbar>
      <div className={styles.container}>
        
        <TableUsuarios />
      </div>
    </DefaultLayout>
  );
}

function TableUsuarios() {
  return (
    <Table hover>
      <thead class="thead-dark">
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
              class="bi bi-circle-fill text-success"
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
                class="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                <span class="visually-hidden">Button</span>
              </svg>
            </Button>{" "}
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jonathan</td>
          <td>Capturador</td>
          <td>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-circle-fill text-success"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
            Activo
          </td>
          <td>DD/MM/YY</td>
          <td>
            <Button variant="outline-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                <span class="visually-hidden">Button</span>
              </svg>
            </Button>{" "}
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Joe</td>
          <td>Capturador</td>
          <td>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-circle-fill text-secondary"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
            Inactivo
          </td>
          <td>DD/MM/YY</td>
          <td>
            <Button variant="outline-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                <span class="visually-hidden">Button</span>
              </svg>
            </Button>{" "}
          </td>
          <span class="glyphicon glyphicon-option-vertica"></span>
        </tr>
      </tbody>
    </Table>
  );
}

export default Usuarios;
