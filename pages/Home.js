import Head from "next/head";
import NavBar from '@common/NavBar'

function Home() {
  return (
    <>
      <Head>
        <title> CORE </title>
        <meta
          name="Core es un administrador productos en tiendas online"
          content="CORE Admin"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar/>
     
    </>
  );
}

export default Home;
