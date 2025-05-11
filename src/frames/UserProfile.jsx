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
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    fetch("http://localhost:5000/userlogs/${id}")
      .then((response) => response.json())
      .then((data) => setLogs(data))
      .catch((error) => console.error("Error fetching logs:", error));
  }, []);

  useEffect(() => {
    if (logs.length === 0) return;

    const selected = logs.find((log) => log.code === aula);
    if (selected) {
      setSelectedLog(selected);
      setEditableAttributes({ ...selected });
    } else {
      console.warn(`No se encontró ningún log para el aula: ${aula}`);
    }
  }, [aula, logs]);

  const handleAttributeChange = (attribute, value) => {
    setEditableAttributes((prev) => ({
      ...prev,
      [attribute]: value,
    }));
  };

  const handleSaveChanges = async () => {
    if (!editableAttributes.code) {
      setMessage("El código del aula no puede estar vacío.");
      setMessageType("error");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/access-logs/${editableAttributes.code}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editableAttributes),
      });

      if (!response.ok) throw new Error("Failed to save changes");

      const data = await response.json();
      setSelectedLog(data.log);
      setLogs((prevLogs) =>
        prevLogs.map((log) =>
          log.code === data.log.code ? data.log : log
        )
      );
      setMessage("Changes saved successfully!");
      setMessageType("success");
      setEditingField(null);
    } catch (error) {
      console.error("Error saving changes:", error);
      setMessage("Error saving changes.");
      setMessageType("error");
    }
  };

  return (
    <div className={styles.frameContainer}>
      <NavBar />
      <Background />

      <section className={styles.addUser}>
        <WebHeader subtitle={`View System Entry for ${aula}`} />

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 487.757" fill="white" className={styles.entryimg}>
            <path d="M237.677.127L11.494 33.889C5.199 34.824 0 41.34 0 47.811v398.691c0 6.437 5.131 8.928 11.494 9.806l226.183 31.384c6.357.878 11.493-7.394 11.493-13.922V9.933c0-6.528-5.267-10.729-11.493-9.806zM454.192 145.453c-8.147-9.561 6.322-21.841 14.424-12.326..."/>
          </svg>
        </div>

        {selectedLog && (
          <div className={styles.entryDetails}>
            <h2 className={styles.entryTitle}>
              {editingField === "code" ? (
                <input
                  type="text"
                  value={editableAttributes.code || ""}
                  onChange={(e) => handleAttributeChange("code", e.target.value)}
                  className={styles.editableTitle}
                />
              ) : (
                <span>{editableAttributes.code}</span>
              )}
              <button
                className={styles.editButton}
                onClick={() =>
                  setEditingField(editingField === "code" ? null : "code")
                }
              >
                ✎
              </button>
            </h2>

            {["username", "status", "date", "time"].map((attribute) => (
              <div key={attribute} className={styles.entryInfo}>
                <label>{toUpperCamelCase(attribute)}</label>
                {editingField === attribute ? (
                  <input
                    type="text"
                    value={editableAttributes[attribute] || ""}
                    onChange={(e) => handleAttributeChange(attribute, e.target.value)}
                    className={styles.editableInput}
                  />
                ) : (
                  <span>{editableAttributes[attribute]}</span>
                )}
                <button
                  className={styles.editButton}
                  onClick={() =>
                    setEditingField(editingField === attribute ? null : attribute)
                  }
                >
                  ✎
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

        {message && (
          <div className={styles.message + " " + styles[messageType]}>
            {message}
          </div>
        )}

        {selectedLog && (
          <button
            onClick={handleSaveChanges}
            className={styles.saveButton}
          >
            Save Changes
          </button>
        )}
      </section>

      <div className={styles.records}>
        <h4>Latest Access logs</h4>
        <Access
          statusFilter=""
          usernameFilter=""
          codeFilter={aula}
          dateFilter=""
          groupByDate={false}
          limit=""
        />
      </div>
    </div>
  );
}

export default SystemEntry;
