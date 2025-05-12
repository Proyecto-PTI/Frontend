import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./AddEntryPoint.module.css";
import LabelComponent from "../components/LabelComponent.jsx";
import WebHeader from "../components/WebHeader.jsx";
import NavBar from "../components/NavBar.jsx";
import Background from "../components/Background.jsx";

function AddEntryPoint() {
  const navigate = useNavigate();

  const [entryName, setEntryName] = useState('');
  const [entryLocation, setEntryLocation] = useState('');
  const [accessCameraId, setAccessCameraId] = useState('');
  const [accessLockId, setAccessLockId] = useState('');
  const [accessAdministrator, setAccessAdministrator] = useState('');
  const [labels, setLabels] = useState([]);
  
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' o 'error'

  const handleCreateEntryPoint = async () => {
    const dataToSend = {
      entryName,
      entryLocation,
      accessCameraId,
      accessLockId,
      accessAdministrator,
      labels: labels.map((label) => ({
        id: label.id,
        text: label.text,
      })),
    };

    try {
      const response = await fetch('https://localhost:5000/addentry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        console.log("Entry point created successfully");
        setMessage("Entry point created successfully!"); // Mensaje de éxito
        setMessageType("success"); // Tipo de mensaje es 'success'
        // Espera de 2 segundos antes de redirigir
      setTimeout(() => {
        navigate("/entry-points"); // Redirige a la vista de entry points
      }, 1000); 
      } else {
        console.error("Failed to create entry point");
        setMessage("Failed to create entry point. Please try again."); // Mensaje de error
        setMessageType("error"); // Tipo de mensaje es 'error'
      }
    } catch (error) {
      console.error("Failed to create entry point");
        setMessage("Failed to create entry point. Please try again."); // Mensaje de error
        setMessageType("error"); // Tipo de mensaje es 'error' 
    }
  };



   const handleAddLabel = (newLabel) => {
        setEditableAttributes((prevState) => ({
            ...prevState,
            labels: [...(prevState.labels || []), newLabel]
        }));
    };

    const handleRemoveLabel = (labelToRemove) => {
        setEditableAttributes((prevState) => ({
            ...prevState,
            labels: (prevState.labels || []).filter(label => label !== labelToRemove)
        }));
    };

  return (
    <div className={styles.frameContainer}>
      <NavBar />
      <Background />
      <section className={styles.addEntryPoint}>
        <WebHeader subtitle="Add System Entry Point" />

        <div>
        <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill="white" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 487.757" className={styles.entryimg}>
          <path d="M237.677.127L11.494 33.889C5.199 34.824 0 41.34 0 47.811v398.691c0 6.437 5.131 8.928 11.494 9.806l226.183 31.384c6.357.878 11.493-7.394 11.493-13.922V9.933c0-6.528-5.267-10.729-11.493-9.806zm216.515 145.326c-8.147-9.561 6.322-21.841 14.424-12.326l.017.017c14.383 16.773 25.273 34.674 32.547 53.191 7.331 18.659 10.98 37.952 10.815 57.392-.171 19.162-4.059 38.397-11.778 57.21-7.463 18.158-18.512 35.917-33.272 52.855a3.357 3.357 0 01-.479.536c-8.494 8.865-22.109-3.569-14.013-12.793 13.386-15.308 23.363-31.288 30.084-47.541 6.887-16.648 10.331-33.585 10.479-50.415.148-17.035-3.113-34.029-9.629-50.563-6.499-16.476-16.271-32.49-29.195-47.563zm-84.399 62.226c-7.736-9.56 6.368-21.47 14.481-12.257.165.166.314.354.445.536 5.98 7.406 10.553 15.148 13.642 23.09 3.147 8.055 4.761 16.327 4.778 24.679.017 8.238-1.499 16.459-4.629 24.566-3.039 7.868-7.611 15.627-13.717 23.106-7.885 9.738-22.633-2.217-14.737-11.977 4.754-5.815 8.272-11.756 10.61-17.696 2.365-6.021 3.517-12.035 3.494-17.999-.017-6.014-1.237-12.069-3.626-18.089-2.406-6.129-6.02-12.143-10.741-17.959zm40.444-30.101a3.573 3.573 0 01-.411-.484c-7.725-9.47 6.317-21.442 14.464-12.258 11.162 12.611 19.606 25.644 25.193 38.898 5.592 13.295 8.352 26.83 8.113 40.455-.223 13.46-3.336 26.898-9.442 40.158-5.946 12.902-14.737 25.661-26.475 38.118l-.223.239c-8.677 8.677-22.074-4.253-13.608-13.238 10.182-10.792 17.753-21.715 22.861-32.621 5.148-11.015 7.759-22.029 7.947-32.952.183-11.094-2.132-22.217-6.835-33.255-4.795-11.162-12.012-22.234-21.584-33.06zm-115.681 16.813h8.529V50.428h-29.531V26.289h30.107c6.482 0 12.383 2.657 16.647 6.921 4.259 4.259 6.916 10.16 6.916 16.642v144.539h8.534c5.809 0 10.57 4.76 10.57 10.569v77.147c0 5.809-4.749 10.57-10.57 10.57h-8.534v144.538c0 6.442-2.657 12.332-6.916 16.602-4.258 4.304-10.159 6.961-16.647 6.961h-30.107V436.64h29.531V292.677h-8.529c-5.814 0-10.569-4.755-10.569-10.57V204.96c0-5.815 4.766-10.569 10.569-10.569zm20.599 62.306c6.009 0 10.883 4.875 10.883 10.883 0 6.01-4.874 10.884-10.883 10.884-6.015 0-10.884-4.874-10.884-10.884 0-6.008 4.869-10.883 10.884-10.883zm-95.516-42.746l-23.734-5.405v70.665l23.734-6.836v-58.424z"/>
        </svg>
        </div>

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

        <LabelComponent
  subtitle="Entry Labels"
  initialLabels={[]}
  onAddLabel={handleAddLabel}
  onRemoveLabel={handleRemoveLabel}
/>

        <div className={styles.buttonmessage}>
          {/* Mensaje de éxito o error */}
          {message && (
                    <div className={`${styles.message} ${styles[messageType]}`}>
                      {message}
                    </div>
                  )}

            <button
              className={styles.createEntryPoint}
              onClick={handleCreateEntryPoint}
              type="button"
            >
              Create Entry Point
            </button>

        </div>
      </section>
    </div>
  );
}

export default AddEntryPoint;
