import React from "react";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        &copy; 2024 Serena Brown | Thank you to{" "}
        <a href="https://unsplash.com/" target="_new">
          Unsplash
        </a>{" "}
        and{" "}
        <a href="https://flaticon.com/" target="_new">
          FlatIcon
        </a>
        .
      </div>
    </footer>
  );
}
