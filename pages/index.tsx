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
      <section className={styles.index}>
        <p>My name is Sara.</p>
        <p>I am a front end developer living in New York.</p>
        <p>Just here to learn and have a good time.</p>
      </section>
    </Fragment>
  );
};

export default Home;
