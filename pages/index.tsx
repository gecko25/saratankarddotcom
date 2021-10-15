import type { NextPage } from "next";
import { Fragment } from "react";
import Head from "next/head";

/* Styles */
import styles from "@styles/index.module.scss";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Sara Tankard -- Front End Developer</title>
        <meta name="description" content="Sara Tankards personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>
          In the process of moving my personal website over to next.js/vercel.
        </p>
      </main>
    </Fragment>
  );
};

export default Home;
