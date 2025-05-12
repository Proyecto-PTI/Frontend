import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";
import { useUser } from "../contexts/UserContext.jsx";
import styles from "./SignUp.module.css";
import Background from "../components/Background";

function SignUp() {
  const { signUp, signIn } = useAuth();
  const { createUserData } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleAuth = async () => {
    setError("");

    if (isSignUp && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      if (isSignUp) {
        const user = await signUp(email, password);
        if(user !== null){
          setAuthenticated(true);

        }
        navigate("/dashboard");
      } else {
        const user = await signIn(email, password);
        if(user !== null){
          setAuthenticated(true);

        }
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.message || "Authentication failed");
    }
  };

  return (

      <section className={styles.signup}>
        <div className={styles.header}>
          <Link to="/" className={styles.facepass}>
            FACEPASS
          </Link>
          <h2 className={styles.createaNewAdminAccount}>
            {isSignUp ? "Create a New Admin Account" : "Sign In to Admin Panel"}
          </h2>
        </div>

        <form className={styles.signupForm} onSubmit={(e) => e.preventDefault()}>


          <div className={styles.FormInput}>
            <label className={styles.email}>Email</label>
            <div className={styles.emailbox}>
              <input
                  type="email"
                  placeholder="youremail@email.com..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.inputField}
              />
            </div>
          </div>

          {isSignUp && (
              <div className={styles.FormInput}>
                <label className={styles.confirmPassword}>Confirm Password</label>
                <div className={styles.passwordbox2}>
                  <input
                      type="password"
                      placeholder="yourpassword..."
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={styles.inputField}
                  />
                </div>
              </div>
          )}
        </form>

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        <div className={styles.footer}>
          <button type="button" className={styles.signupbutton} onClick={handleAuth}>
            {isSignUp ? "Sign up" : "Sign in"}
          </button>

          <p className={styles.alreadyhaveanaccount}>
            {isSignUp ? (
                <>
                  Already have an account?{" "}
                  <span
                      onClick={() => setIsSignUp(false)}
                      className={styles.loginLink}
                      style={{ cursor: "pointer" }}
                  >
                Log in
              </span>
                </>
            ) : (
                <>
                  New user?{" "}
                  <span
                      onClick={() => setIsSignUp(true)}
                      className={styles.loginLink}
                      style={{ cursor: "pointer" }}
                  >
                Sign up
              </span>
                </>
            )}
          </p>
        </div>

        <Background />
      </section>
  );
}

export default SignUp;
