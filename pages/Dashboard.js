import Head from "next/head";
import NavBar from "@common/NavBar";
import { Card } from "react-bootstrap";
import styles from "../styles/Dashboard.module.css";
import { Doughnut, Bar, Line } from 'react-chartjs-2';

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
      <div>
        <Graph/>
      </div>
    </body>
  );
}

function Graph(){
  return(
    <Line
      data={{
        labels: ['Red', 'Blue'],
        datasets: [{
            label: '# of Votes',
            data: [0, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
      }}
      height={100}
      width={200}
      options={{
        mantainAspectRatio: false,
      }}
    />
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
