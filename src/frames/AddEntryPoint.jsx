"use client";
import React, { useState } from "react";
import styles from "./AddEntryPoint.module.css";

// Label tag component
const EntryLabel = ({ text, onRemove }) => {
  return (
    <div className={styles.div5}>
      <div>{text}</div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7723e513be19db8e36db8b7cfcab75172afa5b0?placeholderIfAbsent=true&apiKey=61a77727fee44ba9b3bc5c61b3d4dc53"
        alt="Remove label"
        className={styles.img}
        onClick={onRemove}
      />
    </div>
  );
};

function AddEntryPoint() {
  // State for form fields
  const [formData, setFormData] = useState({
    entryName: "A5S103",
    entryLocation: "Campus Nord",
    accessCameraId: "89-12-LD",
    accessLockId: "457898765D",
    accessAdministrator: "pepe.admin@gmail.com",
  });

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler functions for buttons
  const handleRemoveAllLabels = () => {
    console.log("Remove all labels");
  };

  const handleAddNewLabel = () => {
    console.log("Add new label");
  };

  const handleCreateEntryPoint = () => {
    console.log("Creating entry point with data:", formData);
    // Here you would typically send the data to an API
  };

  return (
    <section className={styles.addEntryPoint}>
      <header>
        <h1 className={styles.facepass}>FACEPASS</h1>
        <h2 className={styles.addSystemEntryPoint}>Add System Entry Point</h2>
      </header>

      <form className={styles.div}>
        <div className={styles.div2}>
          {/* Form labels column */}
          <div className={styles.column}>
            <div className={styles.div3}>
              <label htmlFor="entryName">Entry Name</label>
              <label htmlFor="entryLocation" className={styles.entryLocation}>
                Entry Location
              </label>
              <label htmlFor="accessCameraId" className={styles.accessCameraId}>
                Access Camera ID
              </label>
              <label htmlFor="accessLockId" className={styles.accessLockId}>
                Access Lock ID
              </label>
              <label
                htmlFor="accessAdministrator"
                className={styles.accessAdministrator}
              >
                Access Administrator
              </label>
            </div>
          </div>

          {/* Form values column - now editable */}
          <div className={styles.column2}>
            <div className={styles.div4}>
              <input
                type="text"
                id="entryName"
                name="entryName"
                value={formData.entryName}
                onChange={handleInputChange}
                className={styles.emailbox}
                placeholder="Enter name"
              />

              <input
                type="text"
                id="entryLocation"
                name="entryLocation"
                value={formData.entryLocation}
                onChange={handleInputChange}
                className={styles.userrolebox}
                placeholder="Enter location"
              />

              <input
                type="text"
                id="accessCameraId"
                name="accessCameraId"
                value={formData.accessCameraId}
                onChange={handleInputChange}
                className={styles.emailbox2}
                placeholder="Enter camera ID"
              />

              <input
                type="text"
                id="accessLockId"
                name="accessLockId"
                value={formData.accessLockId}
                onChange={handleInputChange}
                className={styles.numberbox}
                placeholder="Enter lock ID"
              />

              <input
                type="email"
                id="accessAdministrator"
                name="accessAdministrator"
                value={formData.accessAdministrator}
                onChange={handleInputChange}
                className={styles.numberbox2}
                placeholder="Enter administrator email"
              />
            </div>
          </div>
        </div>
      </form>

      <section>
        <h3 className={styles.entrylabels}>Entry labels</h3>

        <div className={styles.base}>
          <EntryLabel
            text="ETSETB"
            onRemove={() => console.log("Remove ETSETB label")}
          />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0b3c1017b7345e61c5a6719bf5427ff60e0b1ec?placeholderIfAbsent=true&apiKey=61a77727fee44ba9b3bc5c61b3d4dc53" alt="Label image" className={styles.img2} />
        </div>

        <div className={styles.div6}>
          <button
            className={styles.div7}
            onClick={handleRemoveAllLabels}
            type="button"
          >
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7723e513be19db8e36db8b7cfcab75172afa5b0?placeholderIfAbsent=true&apiKey=61a77727fee44ba9b3bc5c61b3d4dc53" alt="Remove icon" className={styles.img3} />
            <span className={styles.removeAllLabels}>Remove All Labels</span>
          </button>

          <button
            className={styles.addNewEntryLabel}
            onClick={handleAddNewLabel}
            type="button"
          >
            + Add New Entry Label
          </button>
        </div>
      </section>

      <button
        className={styles.createEntryPoint}
        onClick={handleCreateEntryPoint}
        type="button"
      >
        Create Entry Point
      </button>
    </section>
  );
}

export default AddEntryPoint;
