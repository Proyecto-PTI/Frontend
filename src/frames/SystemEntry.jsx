import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./SystemEntry.module.css";
import NavBar from "../components/NavBar";
import WebHeader from "../components/WebHeader";
import LabelComponent from "../components/LabelComponent";
import Background from "../components/Background.jsx";
import Access from "../components/Access";

// Helper function to convert property names to UpperCamelCase
const toUpperCamelCase = (str) => {
    return str
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (char) => char.toUpperCase())
        .replace(/\bId\b/, "ID");
};

function SystemEntry() {
    const { aula } = useParams();
    const [logs, setLogs] = useState([]);
    const [selectedLog, setSelectedLog] = useState(null);
    const [editableAttributes, setEditableAttributes] = useState({});
    const [editingField, setEditingField] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/doors")
            .then((response) => response.json())
            .then((data) => {
                setLogs(data);
            })
            .catch((error) => console.error("Error fetching entry points:", error));
    }, []);

    useEffect(() => {
        if (logs.length === 0) return; // Cambia `logs` a `entrypoints` si renombraste la variable

        const selected = logs.find((entry) => entry.aula === aula); // Cambia `logs` a `entrypoints`

        if (selected) {
            setSelectedLog((prevSelected) => {
                if (!prevSelected || prevSelected.aula !== selected.aula) {
                    setEditableAttributes({ ...selected });
                    return selected;
                }
                return prevSelected;
            });
        } else {
            console.warn(`No se encontró ningún punto de entrada para el aula: ${aula}`);
        }
    }, [aula, logs]); // Cambia `logs` a `entrypoints` si renombraste la variable

    const handleAttributeChange = (attribute, value) => {
        setEditableAttributes((prev) => ({
            ...prev,
            [attribute]: value,
        }));
    };

    const handleSaveChanges = async () => {
        if (!editableAttributes.aula) {
            alert("El código del aula no puede estar vacío.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/doors/${editableAttributes.aula}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editableAttributes),
            });

            if (!response.ok) {
                throw new Error('Failed to save changes');
            }

            const data = await response.json();
            console.log('Changes saved successfully:', data);

            // Actualiza el estado local con los datos actualizados
            setLogs((prevLogs) =>
                prevLogs.map((log) =>
                    log.aula === data.entry.aula ? data.entry : log
                )
            );

            setSelectedLog(data.entry);
            setEditingField(null);
        } catch (error) {
            console.error('Error saving changes:', error);
        }
    };

    return (
        <div className={styles.frameContainer}>
            <Background />
            <NavBar />
            <div className={styles.container}>
                <WebHeader subtitle={`View System Entry for ${aula}`} />
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fill="white" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 487.757" className={styles.entryimg}>
                        <path d="M237.677.127L11.494 33.889C5.199 34.824 0 41.34 0 47.811v398.691c0 6.437 5.131 8.928 11.494 9.806l226.183 31.384c6.357.878 11.493-7.394 11.493-13.922V9.933c0-6.528-5.267-10.729-11.493-9.806zm216.515 145.326c-8.147-9.561 6.322-21.841 14.424-12.326l.017.017c14.383 16.773 25.273 34.674 32.547 53.191 7.331 18.659 10.98 37.952 10.815 57.392-.171 19.162-4.059 38.397-11.778 57.21-7.463 18.158-18.512 35.917-33.272 52.855a3.357 3.357 0 01-.479.536c-8.494 8.865-22.109-3.569-14.013-12.793 13.386-15.308 23.363-31.288 30.084-47.541 6.887-16.648 10.331-33.585 10.479-50.415.148-17.035-3.113-34.029-9.629-50.563-6.499-16.476-16.271-32.49-29.195-47.563zm-84.399 62.226c-7.736-9.56 6.368-21.47 14.481-12.257.165.166.314.354.445.536 5.98 7.406 10.553 15.148 13.642 23.09 3.147 8.055 4.761 16.327 4.778 24.679.017 8.238-1.499 16.459-4.629 24.566-3.039 7.868-7.611 15.627-13.717 23.106-7.885 9.738-22.633-2.217-14.737-11.977 4.754-5.815 8.272-11.756 10.61-17.696 2.365-6.021 3.517-12.035 3.494-17.999-.017-6.014-1.237-12.069-3.626-18.089-2.406-6.129-6.02-12.143-10.741-17.959zm40.444-30.101a3.573 3.573 0 01-.411-.484c-7.725-9.47 6.317-21.442 14.464-12.258 11.162 12.611 19.606 25.644 25.193 38.898 5.592 13.295 8.352 26.83 8.113 40.455-.223 13.46-3.336 26.898-9.442 40.158-5.946 12.902-14.737 25.661-26.475 38.118l-.223.239c-8.677 8.677-22.074-4.253-13.608-13.238 10.182-10.792 17.753-21.715 22.861-32.621 5.148-11.015 7.759-22.029 7.947-32.952.183-11.094-2.132-22.217-6.835-33.255-4.795-11.162-12.012-22.234-21.584-33.06zm-115.681 16.813h8.529V50.428h-29.531V26.289h30.107c6.482 0 12.383 2.657 16.647 6.921 4.259 4.259 6.916 10.16 6.916 16.642v144.539h8.534c5.809 0 10.57 4.76 10.57 10.569v77.147c0 5.809-4.749 10.57-10.57 10.57h-8.534v144.538c0 6.442-2.657 12.332-6.916 16.602-4.258 4.304-10.159 6.961-16.647 6.961h-30.107V436.64h29.531V292.677h-8.529c-5.814 0-10.569-4.755-10.569-10.57V204.96c0-5.815 4.766-10.569 10.569-10.569zm20.599 62.306c6.009 0 10.883 4.875 10.883 10.883 0 6.01-4.874 10.884-10.883 10.884-6.015 0-10.884-4.874-10.884-10.884 0-6.008 4.869-10.883 10.884-10.883zm-95.516-42.746l-23.734-5.405v70.665l23.734-6.836v-58.424z"/>
                    </svg>
                </div>


            <div className={styles.content}>
                {selectedLog && (
                    <div className={styles.entryDetails}>
                        <h2 className={styles.entryTitle}>
                            {editingField === "aula" ? ( // Cambié "code" a "aula"
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

                        {["entryLocation", "AccessCameraId", "AccessLockId", "AccessAdministrator"].map((attribute) => (
                            <div key={`attribute-${attribute}`} className={styles.entryInfo}>
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
                        ))}
                    </div>
                )}

                {selectedLog && (
                    <LabelComponent
                        subtitle="Entry Labels"
                        labels={editableAttributes.labels || []}
                        onAddLabel={(newLabel) =>
                            handleAttributeChange("labels", [
                                ...(editableAttributes.labels || []),
                                newLabel,
                            ])
                        }
                        onRemoveLabel={(labelToRemove) =>
                            handleAttributeChange(
                                "labels",
                                (editableAttributes.labels || []).filter(
                                    (label) => label !== labelToRemove
                                )
                            )
                        }
                    />
                )}

                {selectedLog && (
                    <button
                        onClick={handleSaveChanges}
                        className={styles.saveButton}
                    >
                        Save Changes
                    </button>
                )}

            <div className={styles.records}>
                    <h4>Latest Access logs</h4>
                    <Access
                        statusFilter=""
                        usernameFilter=""
                        codeFilter={aula}
                        dateFilter=""
                        groupByDate={false}
                        limit={undefined}
                    />
            </div>
            </div>
        </div>
        </div>
    );
}

export default SystemEntry;
