import type { NextPage } from "next";
import Link from "next/link";

import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";

import styles from "./Header.module.scss";

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <Navbar className={styles.Navbar} bg="#1c1c36" expand="lg" variant="dark">
        <Link href="/" passHref>
          <Navbar.Brand>
            <Image
              src="/logo.png"
              width={60}
              height={60}
              alt="Sara Tankard - Front End Developer"
            />
            {/* https://make.freemonogrammaker.com/circle-monogram-with-2-initials/ */}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.navcontainer}>
            <Link href="/portfolio" passHref>
              <Nav.Link>Portfolio</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link>About Me</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link>Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
