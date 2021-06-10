import React from "react";
import styles from "./Index.module.css";
import { Breadcrumb } from "react-bootstrap";





function Notificaciones(){
    return(
        
        <div className={styles.container}>
            <h1>Notificaciones</h1>
            <Breadcrumb>
                <Breadcrumb.Item href="/configuraciones">Configuraciones</Breadcrumb.Item>
                <Breadcrumb.Item active>Notificaciones</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}
export default Notificaciones;