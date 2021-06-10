import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Head from "next/head";
import DefaultLayout from "components/layouts/DefaultLayout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const login = router.pathname === "/";

  return (
    <>
      {login ? (
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
      ) : (
        <DefaultLayout>
          <Head>
            <title> CORE </title>
            <meta
              name="Core es un administrador productos en tiendas online"
              content="CORE Admin"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Component {...pageProps} />
        </DefaultLayout>
      )}
    </>
  );
}

export default MyApp;
