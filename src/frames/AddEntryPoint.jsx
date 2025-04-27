import React, { useState } from "react";
import styles from "./AddEntryPoint.module.css";
import LabelComponent from "../components/LabelComponent.jsx";
import WebHeader from "../components/WebHeader.jsx"; 
import NavBar from "../components/NavBar.jsx"; 




function AddEntryPoint() {

  const handleCreateEntryPoint = () => {
    console.log("Creating entry point with data:", {
      ...formData,
      labels: labels.map((label) => label.text),
    });
    // Here you would typically send the data to an API
  };


  //variables para las propiedades de la entrada 
  const [entryName, setEntryName] = useState('');
  const [entryLocation, setEntryLocation] = useState('');
  const [accessCameraId, setAccessCameraId] = useState('');
  const [accessLockId, setAccessLockId] = useState('');
  const [accessAdministrator, setAccessAdministrator] = useState('');



  return (

    <div className={styles.frameContainer}>
        <NavBar />
    <section className={styles.addEntryPoint}>
      <WebHeader subtitle="Add System Entry Point" />

      <form className={styles.form}>
        <div className={styles.div2}>
          <label className={styles.entryName} htmlFor="name">
            Entry Name
          </label>
          <input
            id="name"
            type="text"
            className={styles.namebox}
            placeholder="Enter the entry name..."
            onChange={(e) => setEntryName(e.target.value)}
          />
        </div>
        <div className={styles.div3}>
          <label className={styles.entryLocation} htmlFor="location">
            Entry Location 
          </label>
          <input
            id="location"
            type="text"
            className={styles.locationbox}
            placeholder="Enter the entry location..."
            onChange={(e) => setEntryLocation(e.target.value)}
          />
        </div>
        <div className={styles.div4}>
          <label className={styles.accessCameraId} htmlFor="cameraid">
            Access Camera ID
          </label>
          <input
            id="cameraid"
            type="text"
            className={styles.cameraidbox}
            placeholder="Enter the camera ID..."
            onChange={(e) => setAccessCameraId(e.target.value)}
          />
        </div>
        <div className={styles.div5}>
          <label className={styles.accessLockId} htmlFor="lockid">
            Access Lock ID
          </label>
          <input
            id="lockid"
            type="text"
            className={styles.lockidbox}
            placeholder="Enter the lock ID..."
            onChange={(e) => setAccessLockId(e.target.value)}
          />
        </div>
        <div className={styles.div6}>
          <label className={styles.AccessAdministrator} htmlFor="administrator">
            Access Administrator
          </label>
          <input
            id="administrator"
            type="text"
            className={styles.administratorbox}
            placeholder="Enter the administrator name..."
            onChange={(e) => setAccessAdministrator(e.target.value)}
          />
        </div>
      </form>

      <LabelComponent subtitle="Entry Labels"/>

      <button
        className={styles.createEntryPoint}
        onClick={handleCreateEntryPoint}
        type="button"
      >
        Create Entry Point
      </button>
    </section>
    </div>
  );
}

export default AddEntryPoint;
