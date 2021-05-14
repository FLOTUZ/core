import Footer from "@common/Footer";
import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> CORE </title>
        <meta
          name="Core es un administrador productos en tiendas online"
          content="CORE Admin"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Aca va todo el login */}
        
      </main>
      <Footer />
    </div>
  );
}
