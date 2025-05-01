import React, { useState } from "react";
import styles from "./Users.module.css";
import WebHeader from "../components/WebHeader.jsx"; 
import ViewUsers from "../components/ViewUsers.jsx"; 
import NavBar from "../components/NavBar.jsx"; 
import Background from "../components/Background.jsx"; 

function Users() {
  return (
    <div className={styles.frameContainer}>
        <NavBar />
        <Background />
    <section className={styles.Users}>
      <div>
        <WebHeader subtitle="View Users" />
      </div>
      <div>
        <ViewUsers />
      </div>
    </section>
    </div>
  ); 
}

export default Users;