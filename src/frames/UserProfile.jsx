
import React, { useState, useRef } from "react";
import styles from "./UserProfile.module.css";
import WebHeader from "../components/WebHeader.jsx"; 
import UserHeader from "../components/UserHeader.jsx";
import LabelComponent from "../components/LabelComponent.jsx";
import AddImages from "../components/AddImages.jsx";
import NavBar from "../components/NavBar.jsx"; 

// Main UserProfile component
function UserProfile() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("idle"); // idle, loading, success, error
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
      setUploadStatus("idle");
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmitImages = async () => {
    if (selectedImages.length === 0) return;

    try {
      setUploadStatus("loading");

      // Simulación de envío de imágenes a un servidor
      // En un caso real, aquí se enviarían las imágenes a un endpoint de API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simular éxito después de 2 segundos
      setUploadStatus("success");

      // Opcional: limpiar las imágenes después de un envío exitoso
      // setTimeout(() => {
      //   setSelectedImages([]);
      //   setUploadStatus('idle');
      // }, 3000);
    } catch (error) {
      console.error("Error al enviar imágenes:", error);
      setUploadStatus("error");
    }
  };

  return (
    <div className={styles.frameContainer}>
        <NavBar />
    <main className={styles.viewProfile}>
      <WebHeader subtitle="View User Profile" />
      <UserHeader />
      <AddImages/>
      <LabelComponent subtitle="Access Permissions"/>
      <AccessLogs />
    </main>
    </div>
  );
}










// Access logs component por ahora inanimado 
function AccessLogs() {
  return (
    <>
    <div className={styles.divaccesslogs}>
      <h3 className={styles.latestAccessLogs}>Latest Access Logs</h3>

      <section className={styles.logsContainer}>

        <div className={styles.logEntry}>

          <div className={styles.logUserInfo}>
            <span className={styles.logUserName}>Pepe Admin. </span>
            <span className={styles.logLocation}>A5S103</span>
          </div>

          <div className={styles.logDetails}>
            <time className={styles.logTimestamp}>17:08:35 23/03/2025</time>
            <div className={styles.authorizedAccess}>Authorized Access</div>
          </div>
        </div>

      </section>
    </div>
    </>
  );
}

export default UserProfile;
