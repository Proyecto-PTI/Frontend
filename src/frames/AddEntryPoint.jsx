import React, { useState } from "react";
import styles from "./AddEntryPoint.module.css";

// Label tag component with SVG icon
const EntryLabel = ({ text, onRemove }) => {
  return (
    <div className={styles.divlabel}>
      <div>{text}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={styles.img}
        onClick={onRemove}
        style={{ cursor: "pointer" }}
      >
        <path
          fillRule="evenodd"
          d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};





function AddEntryPoint() {

  // State for labels
  const [labels, setLabels] = useState([{ id: 1, text: "ETSETB" }]);

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler to remove a specific label
  const handleRemoveLabel = (labelId) => {
    setLabels((prevLabels) =>
      prevLabels.filter((label) => label.id !== labelId),
    );
  };

  // Handler to remove all labels
  const handleRemoveAllLabels = () => {
    setLabels([]);
  };

  // Handler to add a new label
  const handleAddNewLabel = () => {
    // This would typically open a modal or prompt for the label text
    const newLabelText = prompt("Enter new label text:");
    if (newLabelText && newLabelText.trim() !== "") {
      const newLabel = {
        id: Date.now(), // Use timestamp as a simple unique ID
        text: newLabelText.trim(),
      };
      setLabels((prevLabels) => [...prevLabels, newLabel]);
    }
  };

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
    <section className={styles.addEntryPoint}>
      <header>
        <h1 className={styles.facepass}>FACEPASS</h1>
        <h2 className={styles.addSystemEntryPoint}>Add System Entry Point</h2>
      </header>




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





      <section>
        <h3 className={styles.entrylabels}>Entry labels</h3>

      {/*labels area*/}
        <div className={styles.base}>
          {labels.map((label) => (
            <EntryLabel
              key={label.id}
              text={label.text}
              onRemove={() => handleRemoveLabel(label.id)}
            />
          ))}
        </div>

        <div className={styles.div}>

          {/*remove all button*/}
          <button
            className={styles.removeallbutton}
            onClick={handleRemoveAllLabels}
            type="button"
            disabled={labels.length === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.img3}>
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
            </svg>
            <span className={styles.removeAllLabels}>Remove All Labels</span>
          </button>

          {/*add new label button*/}
          <button
            className={styles.addNewEntrybutton}
            onClick={handleAddNewLabel}
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={styles.img4}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className={styles.addNewEntryLabel}>Add New Entry Label</span>
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
