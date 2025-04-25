import React from 'react';
import WebHeader from "../components/WebHeader.jsx"; 
import UserHeader from "../components/UserHeader.jsx"; 

function AddUser() {
  
    return (
      <section className={styles.editAccount}>
        <WebHeader subtitle="Add System User" />
        <UserHeader />
        </section>
    ); 
  }
  
  export default AddUser;
