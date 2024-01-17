import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <Link to="/" className={styles.name}>
          Serena Brown
        </Link>
        <Link to="/about" className={styles.link}>
          About
        </Link>
        <Link to="/contact" className={styles.link}>
          Contact
        </Link>
      </div>
    </header>
  );
}
