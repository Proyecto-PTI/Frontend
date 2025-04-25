
import React, { useState, useRef } from "react";
import styles from "./UserProfile.module.css";
import WebHeader from "../components/WebHeader.jsx"; 
import UserHeader from "../components/UserHeader.jsx";

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
    <main className={styles.viewProfile}>
      <WebHeader subtitle="View User Profile" />
      <UserHeader />
      <ActionButtons
        onSelectImages={triggerFileInput}
        selectedImages={selectedImages}
      />
      <AccessPermissions />
      <AccessLogs />

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        multiple
        style={{ display: "none" }}
      />
    </main>
  );
}


function Header() {
  return (
    <>
      <h1 className={styles.facepass}>FACEPASS</h1>
      <h2 className={styles.editAccount2}>View User Profile</h2>
    </>
  );
}

function Userlogo() {
  const [userName, setUserName] = useState("Pepe Admin.");

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class={styles.imguser}>
        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
      </svg>
      <div className={styles.divPepe}>
        <input
          type="text"
          className={styles.pepeAdmin}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          aria-label="User name"
        />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d60f8b3faacf05ba644f410ffece2f0e8e6dc912?placeholderIfAbsent=true&apiKey=61a77727fee44ba9b3bc5c61b3d4dc53" alt="Edit icon" className={styles.imgpen} />
      </div>
    </>
  );
}

function UserDetails() {
  const [userRole, setUserRole] = useState("System Administrator User");
  const [email, setEmail] = useState("pepe.admin@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("+34 666 66 66 66");

  return (
    <>
      <div className={styles.div2}>
        <label className={styles.userRole} htmlFor="userRole">
          User Role
        </label>
        <select
          id="userRole"
          className={styles.userrolebox}
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
        >
          <option value="System Administrator User">
            System Administrator User
          </option>
          <option value="System User">System User</option>
        </select>
      </div>
      <div className={styles.div3}>
        <label className={styles.email} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className={styles.emailbox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.div4}>
        <label className={styles.phoneNumber} htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          id="phoneNumber"
          type="tel"
          className={styles.numberbox}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
    </>
  );
}







// Action buttons component
function ActionButtons({ onSelectImages, selectedImages }) {
  const [uploadStatus, setUploadStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmitImages = async () => {
    if (selectedImages.length === 0) return;

    try {
      setUploadStatus("loading");

      // Simulación de envío de imágenes a un servidor
      // En un caso real, aquí se enviarían las imágenes a un endpoint de API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simular éxito después de 2 segundos
      setUploadStatus("success");
    } catch (error) {
      console.error("Error al enviar imágenes:", error);
      setUploadStatus("error");
    }
  };

  return (
    <div className={styles.actionsContainer}>
      <h3 className={styles.uploadNewFacialData}>Upload New Facial Data </h3>
      <button className={styles.updatePassword}>Update Password</button>

      <button
        className={styles.selectImagesButton}
        onClick={onSelectImages}
        type="button"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/787ba10794ff38d366556925e11432cdb4ac727d?placeholderIfAbsent=true&apiKey=61a77727fee44ba9b3bc5c61b3d4dc53"
          alt="Upload icon"
          className={styles.uploadIcon}
        />
        <span className={styles.selectNewImages}> Select New Images</span>
      </button>

      {selectedImages.length > 0 && (
        <div className={styles.selectedImagesContainer}>
          <h4 className={styles.selectedImagesTitle}>
            Selected Images ({selectedImages.length})
          </h4>
          <div className={styles.imagePreviewGrid}>
            {selectedImages.map((image, index) => (
              <div key={index} className={styles.imagePreviewItem}>
                <img
                  src={image.preview}
                  alt={`Selected image ${index + 1}`}
                  className={styles.imagePreview}
                />
              </div>
            ))}
          </div>

          <button
            className={`${styles.submitImagesButton} ${uploadStatus === "loading" ? styles.loading : ""} ${uploadStatus === "success" ? styles.success : ""}`}
            onClick={handleSubmitImages}
            disabled={uploadStatus === "loading"}
            type="button"
          >
            {uploadStatus === "idle" && "Enviar imágenes"}
            {uploadStatus === "loading" && "Enviando..."}
            {uploadStatus === "success" && "¡Enviado con éxito!"}
            {uploadStatus === "error" && "Error al enviar. Intentar de nuevo"}
          </button>
        </div>
      )}
    </div>
  );
}










// Label tag component with SVG icon
const EntryLabel = ({ text, onRemove }) => {
  return (
    <div className={styles.divlabel}>
      <div>{text}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={styles.imgcross}
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


// Access permissions component
function AccessPermissions() {

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


  return (
      <section>
        <h3 className={styles.entrylabels}>Access Permissions</h3>

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

        <div className={styles.buttons}>

          {/*remove all button*/}
          <button
            className={styles.removeallbutton}
            onClick={handleRemoveAllLabels}
            type="button"
            disabled={labels.length === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.imgcross2}>
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={styles.imgplus}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className={styles.addNewEntryLabel}>Add New Entry Label</span>
          </button>

        </div>
      </section>
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
