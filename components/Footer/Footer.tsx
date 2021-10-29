import type { NextPage } from "next";
import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer: NextPage = () => (
  <footer className={styles.footer}>
    <a href="https://twitter.com/saratanky" target="_blank" rel="noreferrer">
      <Image src="/twitter.png" width={30} height={30} alt="Sara's Twitter" />
    </a>
    <a
      href="https://github.com/gecko25"
      target="_blank"
      rel="noreferrer"
      style={{ marginLeft: "-5px", marginRight: "-3px" }}
    >
      <Image src="/github.png" width={30} height={30} alt="Sara's Github" />
    </a>
    <a
      href="https://www.linkedin.com/in/saratankard/"
      target="_blank"
      rel="noreferrer"
    >
      <Image src="/linkedin.png" width={30} height={30} alt="Sara's LinkedIn" />
    </a>
    <a
      href="https://docs.google.com/document/d/1LMMeQQR8oJd_hs37OI3r07F-oNvlfHd9be4ScKTSgPk/edit?usp=sharing"
      target="_blank"
      rel="noreferrer"
      style={{ marginLeft: "-6px" }}
    >
      <Image src="/resume.png" width={35} height={30} alt="Sara's Resume" />
    </a>
  </footer>
);

export default Footer;
