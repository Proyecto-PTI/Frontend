import React, { useState } from "react";
import styles from "./Users.module.css";
import WebHeader from "../components/WebHeader.jsx"; 
import ViewUsers from "../components/ViewUsers.jsx"; 


function Users() {
  return (
    <section className={styles.Users}>
      <WebHeader subtitle="View Users" />
      <ViewUsers />
    </section>
  ); 
}

export default Users;