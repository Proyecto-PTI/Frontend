import React, { useState } from "react";
import styles from "./Users.module.css";
import WebHeader from "../components/WebHeader.jsx"; 
import ViewUsers from "../components/ViewUsers.jsx"; 
import NavBar from "../components/NavBar.jsx"; 

function Users() {
  return (
    <div className={styles.frameContainer}>
        <NavBar />
    <section className={styles.Users}>
      <WebHeader subtitle="View Users" />
      <ViewUsers />
    </section>
    </div>
  ); 
}

export default Users;