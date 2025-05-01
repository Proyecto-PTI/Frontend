import React from 'react';

import styles from './SystemSettings.module.css';
import NavBar from "../components/NavBar";
import WebHeader from "../components/WebHeader"; 
import Background from '../components/Background';
import { FaCog } from 'react-icons/fa';
import { FaSync } from 'react-icons/fa';

function SystemSettings() {
  return (
   <div className={styles.frameContainer}>
       <NavBar />
       <Background/>

    <div className={styles.content}>
    <div className={styles.container}>
      <div className={styles.settings}>
         <WebHeader subtitle={
  	   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <FaCog style={{ marginRight: '8px' }} size={24}  />
           System Settings
          </div>
          } />

        <div className={styles.options}>
          <div className={styles.field}>
            <label>Theme</label>
            <select>
              <option>Dark mode</option>
            </select>
          </div>

          <div className={styles.field}>
            <label>Language</label>
            <select>
              <option>English</option>
            </select>
          </div>
        </div>


       
       
       <button className={`${styles.refreshButton} ${styles.buttonWithIcon}`}>
         <FaSync className={styles.icon} size={20} />  {/* El ícono de refresh */}
          Refresh Service Container
       </button>
       
        <button className={styles.applyButton}>Apply</button>
      
    </div>
    </div>
    <footer className={styles.footer}>
      
        <div className={styles.contact}>
          <h3>Contact Us <span className={styles.brand}>FACEPASS</span></h3>
          <div className={styles.sotaline}>

            
            <p>
              <strong>Email</strong> <a href="mailto:facepass.info@pti.com">facepass.info@pti.com</a><br />
              <strong>Info Phone number</strong> +1 829 23 78 29
            </p>
            <p>
              -- More information in our website -- <br />
              <a href="https://facepassinfo.rep.com/info" target="_blank" rel="noopener noreferrer">
                https://facepassinfo.rep.com/info
              </a>
            </p>

          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
export default SystemSettings;

