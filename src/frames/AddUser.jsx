import React, { useState } from "react";
import styles from "./AddUser.module.css";
import WebHeader from "../components/WebHeader.jsx"; 
import UserHeader from "../components/UserHeader.jsx"; 
import LabelComponent from "../components/LabelComponent.jsx"; 
import AddImages  from "../components/AddImages.jsx";

function AddUser() {

  const handleCreateUser = () => {
    console.log("Creating user with data:", {
      ...formData,
      labels: labels.map((label) => label.text),
    });
    // Here you would typically send the data to an API
  };
  
    return (
      <section className={styles.addUser}>
        <WebHeader subtitle="Add System User" />
        {/*provisional en realidad no es ese componente*/ }
        <UserHeader />
        <AddImages/>
        <LabelComponent subtitle="Access Permissions"/>
        <button
                className={styles.createUser}
                onClick={handleCreateUser}
                type="button"
              >
                Create User
              </button>
        </section>
    ); 
  }
  
  export default AddUser;
