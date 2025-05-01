import React from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
import Background from "../components/Background";


function SignUp() {
  return (
    <section className={styles.signup}>

      <div className={styles.header}>
        <Link to="/" className={styles.facepass}>
                FACEPASS 
        </Link>{"  "}

        <h2 className={styles.createaNewAdminAccount}>
          Create a New Admin Account
        </h2>
      </div>


      <form 
        className={styles.signupForm}
      >
        <div className={styles.FormInput}>
          <label className={styles.userName}>User Name</label>
          <div className={styles.userbox}>
            <input
              type="text"
              placeholder="yourusername..."
              className={styles.inputField}
            />
          </div>
        </div>

        <div className={styles.FormInput}>
          <label className={styles.email}>Email</label>
          <div className={styles.emailbox}>
            <input
              type="email"
              placeholder="youremail@email.com..."
              className={styles.inputField}
            />
          </div>
        </div>

        <div className={styles.FormInput}>
          <label className={styles.password}>Password</label>
          <div className={styles.passwordbox}>
            <input
              type="password"
              placeholder="yourpassword..."
              className={styles.inputField}
            />
          </div>
        </div>

        <div className={styles.FormInput}>
          <label className={styles.confirmPassword}>Confirm Password</label>
          <div className={styles.passwordbox2}>
            <input
              type="password"
              placeholder="yourpassword..."
              className={styles.inputField}
            />
          </div>
        </div>

      </form>


      <div className={styles.footer}>

        <button type="button" className={styles.signupbutton}>
          Sign up
        </button>

        <p className={styles.alreadyhaveanaccount}>
          Already have an account?{"  "}
          <Link to="/login" className={styles.loginLink}>
              Log in
          </Link>{"  "}
          <span className={styles.loginText}>to your admin </span>
        </p>

      </div>

      <Background/>
    </section>
  );
}

export default SignUp;