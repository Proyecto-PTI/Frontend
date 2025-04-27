import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './NavBar.module.css';

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {/* Pa que se ponga oscurito */}
      {isVisible && <div className={styles.overlay} onClick={toggleSidebar}></div>}

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isVisible ? styles.visible : styles.hidden}`}>
        
        {/*logo+foto+username*/}
        <div className={styles.header}>
          <Link to="/" className={styles.headerfacepass}>
            FACEPASS 
          </Link>{"  "}
          <div  className={styles.headeruser}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.avatar}>
              <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
            </svg>
            <p>Pepe Admin.</p>
          </div>
        </div>

        <div className={styles.section}>
          <h4>Account Settings</h4>
          <Link to="/edit-account" className={styles.link}>
            Edit Account 
          </Link>{"  "}
          <Link to="/edit-account" className={styles.link}>
            Change Password 
          </Link>{"  "}
        </div>

        <div className={styles.section2}>
        < Link to="/system-settings" className={styles.link2}>
          <h4>System Settings</h4>
        </Link>{"  "}
        </div>

        <div className={styles.section}>
          <h4>User Management</h4>
          <Link to="/users" className={styles.link}>
            View Users  
          </Link>{"  "}
          <Link to="/add-user" className={styles.link}>
            Add User 
          </Link>{"  "}
        </div>

        <div className={styles.section}>
          <h4>Access Management</h4>
          <Link to="/entry-points" className={styles.link}>
            View Entry Points 
          </Link>{"  "}
          <Link to="/add-entry" className={styles.link}>
            Add Entry Point 
          </Link>{"  "}
          <Link to="/access-logs" className={styles.link}>
            Access Logs 
          </Link>{"  "}
        </div>

        <div className={styles.section}>
          <h4>Alerts Settings</h4>
          <Link to="/access-alerts" className={styles.link}>
            Access Alerts  
          </Link>{"  "}
          <Link to="/alert-settings" className={styles.link}>
            Alerts Settings 
          </Link>{"  "}
        </div>

        <div className={styles.footer}>
          <Link to="/dashboard">
            <button className={styles.dashboardBtn}>Return to Dashboard</button>
          </Link>
          <Link to="/login">
            <button className={styles.logout}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.logoutimg}>
              <path fill-rule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clip-rule="evenodd" />
            </svg>
              Log out</button>
          </Link>
        </div>
      </div>

      {/* Boton de abrir/cerrar */}
      <button
        className={`${styles.toggleButton} ${isVisible ? styles.buttonActive : ''}`}
        onClick={toggleSidebar}
      >
        {isVisible ? '×' : '☰'}
      </button>
    </>
  );
};

export default NavBar;
