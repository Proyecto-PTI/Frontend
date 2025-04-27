import React from "react";
import { Link } from "react-router-dom";
import styles from "./WebHeader.module.css"; 

function Header({ subtitle }) {
  return (
    <>

     <Link to="/" className={styles.facepass}>
        FACEPASS 
      </Link>{"  "}
      <h2 className={styles.subtitle}>{subtitle}</h2>
    </>
  );
}

export default Header;