import styles from "../styles/Dashboard.module.css";
import Head from "next/head";
import NavBar from "@common/NavBar";
import { Card } from "react-bootstrap";
import { Line } from 'react-chartjs-2';
import Table from 'react-bootstrap/Table';

function Dashboard() {
  return (
    <>
      <StyleTitle />
      <NavBar />
      <Body />
    </>
  );
}

function StyleTitle() {
  return (
    <Head>
      <title>Dashboard</title>
    </Head>
  );
}

function Body() {
  let text = [
    "Productos en BD ASPEL",
    "Ventas a resgistrar en ASPEL",
    "Productos publicados en tiendas",
    "Ventas registradas en ASPEL",
  ];
  let value = [60, 16, 43, 64];

  return (
    <div className={styles.elements}>
      <div>
        <ul className={styles.cards}>
          <li>
            <Cards text={text[0]} value={value[0]} />
          </li>
          <li>
            <Cards text={text[1]} value={value[1]} />
          </li>
          <li>
            <Cards text={text[2]} value={value[2]} />
          </li>
          <li>
            <Cards text={text[3]} value={value[3]} />
          </li>
        </ul>
      </div>
      <div className={styles.box}>
        <Graph/>
      </div>
      <div className={styles.box}>
        <div>
          <h2>Ultimos productos vendidos: Amazon</h2>
          <p>Monto: </p>
        </div>
        <AmazonSells/>
      </div>
      <div className={styles.box}>
        <div>
          <h2>Ultimos productos vendidos: Mercado Libre</h2>
          <p>Monto: </p>
        </div>
        <MercadoLibreSells/>
      </div>
      <div className={styles.box}>
        <div>
          <h2>Ultimos productos vendidos: WooCommerce</h2>
          <p>Monto: </p>
        </div>
        <WooCommerceSells/>
      </div>
    </div>
  );
}

function Graph() {
  return (
    <Line
      data={{
        labels: ["Red", "Blue"],
        datasets: [
          {
            label: "# of Votes",
            data: [0, 10],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1,
          },
        ],
      }}
      height={100}
      width={200}
      options={{
        mantainAspectRatio: false,
      }}
    />
  );
}

function Cards({ text, value }) {
  return (
    <Card style={{ width: "18rem" }} className={styles.card}>
      <Card.Body>
        <Card.Title>{text}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>{value}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function AmazonSells(){
  return (
    <div>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Bocinas</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Proyector</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Teatro en casa</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Subwoofer Yamaha</td>
            <td>1</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

function MercadoLibreSells(){
  return (
    <div>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Bocinas</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Proyector</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Teatro en casa</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Subwoofer Yamaha</td>
            <td>1</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

function WooCommerceSells(){
  return (
    <div>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Bocinas</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Proyector</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Teatro en casa</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Subwoofer Yamaha</td>
            <td>1</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Dashboard;
