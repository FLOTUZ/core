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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
    </div>
  );
}

export default Dashboard;
