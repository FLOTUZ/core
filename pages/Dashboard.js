import Head from "next/head";
import NavBar from "@common/NavBar";

function Dashboard() {
  return (
    <div>
      <Head>
        <title> Panel </title>
        <meta
          name="Core es un administrador productos en tiendas online"
          content="CORE Admin"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
    </div>
  );
}

export default Dashboard;
