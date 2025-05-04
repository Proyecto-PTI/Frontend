import React from "react";
import { Link } from "react-router-dom";
import styles from "./Welcome.module.css";
import Background from "../components/Background";

function Welcome() {
  return (
    <div>
      <Background />
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.logo}>FACEPASS</h1>
          <p className={styles.tagline}>
            Smart access control using facial recognition.
          </p>
        </header>

        {/* Section: About */}
        <section className={styles.section}>
          <h2>What is FACEPASS?</h2>
          <p>
            FACEPASS is a modern and secure system that allows user authentication
            through facial recognition, enabling real-time access control using
            affordable hardware and web technologies.
          </p>
        </section>

        {/* Section: Login/Register */}
        <section className={styles.authSection}>
          <Link to="/login">
          <button className={styles.loginBtn}>Log In</button>        
          </Link>
          <Link to="/sign-up">
          <button className={styles.registerBtn}>Sign Up</button>
          </Link>
        </section>

        {/* Section: Authors */}
        <section className={styles.section}>
          <h2>Authors</h2>
          <ul className={styles.authorsList}>
            <li>Lola Constantin</li>
            <li>Albert Gómez</li>
            <li>Piotr Pomykalski</li>
            <li>Mar Puigmartí</li>
            <li>Yolanda Romero</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>© 2025 FACEPASS. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Welcome;
