import React, { useState, useRef, useEffect } from "react";
import styles from "./AddImages.module.css";



//boton que abre el selector de archivos
function SelectImagesButton({ onClick }) {
  return (
    <button className={styles.selectImagesButton} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.selectIcon}>
        <path fill-rule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V10.5Z" clip-rule="evenodd" />
      </svg>
      <span className={styles.selectNewImages}>Select New Images</span>
    </button>
  );
}



//mini foto preview
function ImagePreviewItem({ file, index, onRemove }) {
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    // Crea una Url para la preview de la imagen 
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    // para liberar recursos no en k
    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

  return (
    <div className={styles.previewItem}>
      <img
        src={previewUrl}
        alt={`Preview ${index + 1}`}
        className={styles.previewImage}
      />
      <span className={styles.fileName}>{file.name}</span>
      {onRemove && (
        <button
          className={styles.removeButton}
          onClick={() => onRemove(index)}
        >
          ×
        </button>
      )}
    </div>
  );
}


//base donde se ven las minifotos
function ImagePreviewArea({ selectedFiles, onRemoveFile }) {
  
  //si no hay ninguna imagen seleccionada
  if (!selectedFiles || selectedFiles.length === 0) {
    return (
      <section className={styles.base} >
        <p className={styles.emptyMessage}>No images selected yet</p>
      </section>
    );
  }

  return (
    <section className={styles.base} >
      <div className={styles.previewGrid}>
        {selectedFiles.map((file, index) => (
          <ImagePreviewItem
            key={`${file.name}-${index}-${file.lastModified}`}
            file={file}
            index={index}
            onRemove={onRemoveFile}
          />
        ))}
      </div>
    </section>
  );
}


//boton para enviar las imageness
function SendDataButton({ onClick, disabled }) {
  return (
    <button
      className={`${styles.sendData} ${disabled ? styles.sendDataDisabled : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      Send Data
    </button>
  );
}



function AddImages({ onImagesSelected }) {

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  
  const fileInputRef = useRef(null);



  const handleSelectImages = () => {
    // Clear any previous errors
    setError("");
    // abrir la ventana para seleccionar archivos
    fileInputRef.current.click();
  };


  //guardar las imagenes seleccionadas 
  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files).filter((file) =>
      file.type.startsWith("image/")
    );
  
    if (newFiles.length > 0) {
      const updatedFiles = [...selectedFiles, ...newFiles];
      setSelectedFiles(updatedFiles);
      onImagesSelected(updatedFiles); 
    }
  
    event.target.value = "";
  };


  //funcion para eliminar fotos 
  const handleRemoveFile = (indexToRemove) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove),
    );
  };

  const handleSendData = () => {
    if (selectedFiles.length === 0) {
      setError("Please select images first");
      return;
    }

    setError("");
    setIsUploading(true);
    console.log("Sending data with", selectedFiles.length, "files");

    //aqui es donde va el codigo para enviar las fotitos 

    // Simulacion de un envio exitoso pa poder pintar los botoncitos bien
    setTimeout(() => {
      setIsUploading(false);
      alert("Data sent successfully!");
      setSelectedFiles([]); // Reset the selection after successful upload
    }, 1500);
  };

  return (
    <section className={styles.addImages}>
      <div className={styles.headerContainer}>
        <h1 className={styles.uploadNewFacialData}>Upload New Facial Data</h1>
        <SelectImagesButton onClick={handleSelectImages} />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          multiple
          style={{ display: "none" }}
        />
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
      <ImagePreviewArea
        selectedFiles={selectedFiles}
        onRemoveFile={handleRemoveFile}
      />
      {isUploading && (
        <p className={styles.uploadingMessage}>Uploading images...</p>
      )}
    </section>
  );
}

export default AddImages;
