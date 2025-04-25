import React from "react";
import styles from "./WebHeader.module.css"; 

function Header({ subtitle }) {
  return (
    <>
      <h1 className={styles.facepass}>FACEPASS</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
    </>
  );
}

export default Header;