import type { NextPage } from "next";
import Image from "next/image";
import styles from "./Footer.module.scss";

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
  <div style={{ margin: "50px 0" }}>
    <h1>{title}</h1>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",
      }}
    >
      <a href={link} target="_blank" rel="noreferrer">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
        />
      </a>

      <div style={{ marginLeft: "20px" }}>{children}</div>
    </div>

    <ul>
      {tools.map((tool) => (
        <li key={tool}>{tool}</li>
      ))}
    </ul>

    <p>repo: {github ? <a href={github}>{github}</a> : "private"}</p>
  </div>
);

export default PortfolioItem;
