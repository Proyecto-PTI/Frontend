import React, { useState, useEffect } from "react";
import styles from "./SystemEntry.module.css";
import NavBar from "../components/NavBar";
import WebHeader from "../components/WebHeader";
import LabelComponent from "../components/LabelComponent";
import Background from "../components/Background.jsx";

// Helper function to convert property names to UpperCamelCase
const toUpperCamelCase = (str) => {
    return str
        .replace(/([A-Z])/g, " $1") // Inserta un espacio antes de las mayúsculas
        .replace(/^./, (char) => char.toUpperCase()) // Convierte la primera letra a mayúscula
        .replace(/\bId\b/, "ID"); // Reemplaza "Id" por "ID"
};

function SystemEntry() {
    const [doors, setDoors] = useState([]);
    const [selectedDoor, setSelectedDoor] = useState(null);
    const [editableAttributes, setEditableAttributes] = useState({});
    const [editingField, setEditingField] = useState(null); // Track which field is being edited

    // Fetch doors from the backend
    useEffect(() => {
        fetch("http://localhost:5000/api/doors")
            .then((response) => response.json())
            .then((data) => {
                setDoors(data);
                setSelectedDoor(data[0]); // Set the first door as the default selected door
                setEditableAttributes({ ...data[0] }); // Initialize editable attributes
            })
            .catch((error) => console.error("Error fetching doors:", error));
    }, []);

    // Handle attribute change
    const handleAttributeChange = (attribute, value) => {
        setEditableAttributes((prev) => ({
            ...prev,
            [attribute]: value,
        }));
    };

    // Handle door selection
    const handleSelectDoor = (door) => {
        setSelectedDoor(door); // Actualiza el estado con el log seleccionado
        setEditableAttributes({ ...door }); // Actualiza los atributos editables con los datos del log
        setEditingField(null); // Sal de cualquier modo de edición
    };

    // Save changes to the selected door
    const handleSaveChanges = () => {
        setSelectedDoor(editableAttributes);
        setEditingField(null); // Exit edit mode
    };

    return (
        <div className={styles.frameContainer}>
            <NavBar />
            <Background /> {/* Fondo colorido */}
            <div className={styles.container}>
                <WebHeader subtitle="View System Entry" />

                {/* Selected Door Details */}
                {selectedDoor && (
                    <div className={styles.entryDetails}>
                        {/* Aula as a title */}
                        <h2 className={styles.entryTitle}>
                            {editingField === "aula" ? (
                                <input
                                    type="text"
                                    value={editableAttributes.aula || ""}
                                    onChange={(e) =>
                                        handleAttributeChange("aula", e.target.value)
                                    }
                                    className={styles.editableTitle}
                                />
                            ) : (
                                <span>{editableAttributes.aula}</span>
                            )}
                            <button
                                className={styles.editButton}
                                onClick={() =>
                                    setEditingField(editingField === "aula" ? null : "aula")
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className={styles.editIcon}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.862 3.487a2.25 2.25 0 1 1 3.182 3.182L7.5 19.213l-4.5 1.5 1.5-4.5L16.862 3.487z"
                                    />
                                </svg>
                            </button>
                        </h2>

                        {/* Editable attributes */}
                        {["entryLocation", "accessCameraId", "accessLockId", "accessAdministrator"].map(
                            (attribute) => (
                                <div key={attribute} className={styles.entryInfo}>
                                    <label>{toUpperCamelCase(attribute)}</label>
                                    {editingField === attribute ? (
                                        <input
                                            type="text"
                                            value={editableAttributes[attribute] || ""}
                                            onChange={(e) =>
                                                handleAttributeChange(attribute, e.target.value)
                                            }
                                            className={styles.editableInput}
                                        />
                                    ) : (
                                        <span>{editableAttributes[attribute]}</span>
                                    )}
                                    <button
                                        className={styles.editButton}
                                        onClick={() =>
                                            setEditingField(
                                                editingField === attribute ? null : attribute
                                            )
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className={styles.editIcon}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16.862 3.487a2.25 2.25 0 1 1 3.182 3.182L7.5 19.213l-4.5 1.5 1.5-4.5L16.862 3.487z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            )
                        )}

                        {/* Labels Section */}
                        <LabelComponent
                            subtitle="Entry Labels"
                            labels={editableAttributes.labels || []} // Usa las labels del estado editable
                            onAddLabel={(newLabel) =>
                                handleAttributeChange("labels", [
                                    ...(editableAttributes.labels || []),
                                    newLabel,
                                ])
                            }
                            onRemoveLabel={(labelToRemove) =>
                                handleAttributeChange(
                                    "labels",
                                    editableAttributes.labels.filter(
                                        (label) => label !== labelToRemove
                                    )
                                )
                            }
                        />

                        {/* Save Changes Button */}
                        <button
                            onClick={handleSaveChanges}
                            className={styles.saveButton}
                        >
                            Save Changes
                        </button>
                    </div>
                )}

                {/* Latest Access Logs */}
                <div className={styles.logsSection}>
                    <h3 className={styles.logsTitle}>Latest Access Logs</h3>
                    <div className={styles.logsContainer}>
                        {doors.map((door, index) => (
                            <div
                                key={index}
                                className={styles.logEntry}
                                onClick={() => handleSelectDoor(door)} // Evento onClick para seleccionar el log
                                style={{ cursor: "pointer" }} // Cambia el cursor al pasar sobre el log
                            >
                                {/* Información del usuario */}
                                <div className={styles.logUserInfo}>
                                    <span className={styles.logUsername}>{door.name}</span>
                                    <span className={styles.logAula}>{door.aula}</span>
                                </div>
                                {/* Detalles del log */}
                                <div className={styles.logDetails}>
                                    <div className={styles.logTimeDate}>
                                        <span className={styles.logTime}>{door.hora}</span>
                                        <span className={styles.logDate}>{door.día}</span>
                                    </div>
                                    <span
                                        className={`${styles.logStatus} ${
                                            door.authorizedAccess ? styles.authorized : styles.denied
                                        }`}
                                    >
                                        {door.authorizedAccess ? "Authorized Access" : "Access Denied"}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SystemEntry;