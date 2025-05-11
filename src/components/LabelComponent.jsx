import React, { useEffect, useState } from "react";
import styles from "./LabelComponent.module.css";

const EntryLabel = ({ text, onRemove }) => {
  return (
    <div className={styles.divlabel}>
      <div>{text}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={styles.crossimg}
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

function LabelComponent({ subtitle, initialLabels = [], onLabelsChange }) {
  const [labels, setLabels] = useState(initialLabels || []);

  // Sincronizar cambios desde el padre
  useEffect(() => {
    setLabels(initialLabels || []);
  }, [initialLabels]);

  // Notificar cambios al padre
  useEffect(() => {
    if (onLabelsChange) {
      onLabelsChange(labels);
    }
  }, [labels, onLabelsChange]);

  const handleRemoveLabel = (labelText) => {
    setLabels((prevLabels) =>
      prevLabels.filter((label) => label !== labelText)
    );
  };

  const handleRemoveAllLabels = () => {
    setLabels([]);
  };

  const handleAddNewLabel = () => {
    const newLabelText = prompt("Enter new label text:");
    if (newLabelText && newLabelText.trim() !== "") {
      setLabels((prevLabels) => [...prevLabels, newLabelText.trim()]);
    } else {
      alert("Please enter a valid label text.");
    }
  };

  return (
    <section className={styles.section}>
      <h3 className={styles.subtitle}>{subtitle}</h3>

      {/* Labels area */}
      <div className={styles.base}>
        {labels.map((label, index) => (
          <EntryLabel
            key={index}
            text={label}
            onRemove={() => handleRemoveLabel(label)}
          />
        ))}
      </div>

      <div className={styles.div}>
        {/* Remove all button */}
        <button
          className={styles.removeallbutton}
          onClick={handleRemoveAllLabels}
          type="button"
          disabled={labels.length === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={styles.img3}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
          <span className={styles.removeAllLabels}>Remove All Labels</span>
        </button>

        {/* Add new label button */}
        <button
          className={styles.addNewEntrybutton}
          onClick={handleAddNewLabel}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={styles.img4}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span className={styles.addNewEntryLabel}>Add New Entry Label</span>
        </button>
      </div>
    </section>
  );
}

export default LabelComponent;
