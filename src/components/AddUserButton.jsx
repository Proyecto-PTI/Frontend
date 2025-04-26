import React from "react";
import styles from "./ViewUsers.module.css";

function AddUserButton() {
  return (
    <button className={styles.addUserButton}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/309563390de6fd40574f879507a46f21120cb614?placeholderIfAbsent=true&apiKey=61a77727fee44ba9b3bc5c61b3d4dc53"
        alt="Add user icon"
        className={styles.addUserIcon}
      />
      <span className={styles.addUserText}>Add a New System User </span>
    </button>
  );
}

export default AddUserButton;
