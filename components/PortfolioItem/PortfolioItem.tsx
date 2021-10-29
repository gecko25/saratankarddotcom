import type { NextPage } from "next";
import Image from "next/image";
import styles from "./PortfolioItem.module.scss";

type Props = {
  title: string;
  link: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  tools: string[];
  github?: string;
};

const PortfolioItem: NextPage<Props> = ({
  title,
  link,
  image,
  tools,
  children,
  github,
}) => (
  <div className={styles.container}>
    <a href={link}>
      <h1>{title}</h1>
    </a>
    <div className={styles.body}>
      <a href={link} target="_blank" rel="noreferrer">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
        />
      </a>

      <div className={styles.copy}>{children}</div>
    </div>

    <ul style={{ marginTop: "10px" }}>
      {tools.map((tool) => (
        <li key={tool}>{tool}</li>
      ))}
    </ul>

    <span className={styles.links}>
      <a href={link}>{link}</a>
    </span>
    <span>&nbsp;&bull;&nbsp;</span>
    <span className={styles.links}>
      {github ? <a href={github}>{github}</a> : "private repo"}
    </span>
  </div>
);

export default PortfolioItem;
