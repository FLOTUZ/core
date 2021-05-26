import Head from "next/head";
import NavBar from "@common/NavBar";
import { Card } from "react-bootstrap";
import styles from "../styles/Dashboard.module.css";

function Dashboard() {
  return (
    <>
      <StyleTitle />
      <NavBar/>
      <Body/>
    </>
  );
}

function StyleTitle() {
  return (
    <head>
      <title>Dashboard</title>
      <link
        rel="stylesheet"
        href="../styles/Dashboard.module.css"
        type="text/css"
      ></link>
    </head>
  );
}

function Body(){
  let text = ["Productos en BD ASPEL","Ventas a resgistrar en ASPEL","Productos publicados en tiendas","Ventas registradas en ASPEL"];
  let value = [60,16,43,64];

  return(
    <body className={styles.body}>
      <div>
        <ul className={styles.cards}>
          <li><Cards text={text[0]} value={value[0]}/></li>
          <li><Cards text={text[1]} value={value[1]}/></li>
          <li><Cards text={text[2]} value={value[2]}/></li>
          <li><Cards text={text[3]} value={value[3]}/></li>
        </ul>
      </div>
    </body>
  );
}

function Cards({text,value}) {
  return (
    <Card style={{ width: "18rem" }} className={styles.card}>
      <Card.Body>
        <Card.Title>{text}</Card.Title>
        <Card.Text style={{ textAlign: "center"}}>
          {value}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Dashboard;
