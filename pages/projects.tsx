import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <section className={styles.container}>
      <Head>
        <title>Sara Tankard -- Front End Developer</title>
        <meta name="description" content="Sara Tankards personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <a href="https://github.com/gecko25" target="_blank" rel="noreferrer">
          <Image src="/github.png" width={40} height={40} alt="Sara's Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/saratankard/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/linkedin.png"
            width={40}
            height={40}
            alt="Sara's LinkedIn"
          />
        </a>
        <a
          href="https://docs.google.com/document/d/1LMMeQQR8oJd_hs37OI3r07F-oNvlfHd9be4ScKTSgPk/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/resume.png" width={40} height={40} alt="Sara's Resume" />
        </a>
      </header>

      <main className={styles.main}>
        <div></div>
      </main>

      <footer className={styles.footer}></footer>
    </section>
  );
};

export default Home;
