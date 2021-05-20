import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
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

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
