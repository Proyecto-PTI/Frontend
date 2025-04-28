import React, { useState, useEffect } from "react";
import styles from "./SystemEntry.module.css";
import NavBar from "../components/NavBar";
import WebHeader from "../components/WebHeader";

function SystemEntry() {
    const [logs, setLogs] = useState([]);
    const [selectedLog, setSelectedLog] = useState(null);

    // Fetch logs from the backend
    useEffect(() => {
        fetch("http://localhost:5000/api/access-logs")
            .then((response) => response.json())
            .then((data) => {
                setLogs(data);
                setSelectedLog(data[0]); // Set the first log as the default selected log
            })
            .catch((error) => console.error("Error fetching logs:", error));
    }, []);

    return (
        <div className={styles.frameContainer}>
            <NavBar />
            <div className={styles.container}>
                <WebHeader subtitle="View System Entry" />

                {/* Selected Log Details */}
                {selectedLog && (
                    <div className={styles.entryDetails}>
                        <h2 className={styles.entryTitle}>{selectedLog.code}</h2>
                        <div className={styles.entryInfo}>
                            <label>Username</label>
                            <span>{selectedLog.username}</span>
                        </div>
                        <div className={styles.entryInfo}>
                            <label>Access Camera ID</label>
                            <span>{selectedLog.code}</span>
                        </div>
                        <div className={styles.entryInfo}>
                            <label>Access Lock ID</label>
                            <span>{selectedLog.code}</span>
                        </div>
                        <div className={styles.entryInfo}>
                            <label>Access Time</label>
                            <span>{selectedLog.time}</span>
                        </div>
                        <div className={styles.entryInfo}>
                            <label>Access Date</label>
                            <span>{selectedLog.date}</span>
                        </div>
                        <div className={styles.entryInfo}>
                            <label>Status</label>
                            <span
                                className={
                                    selectedLog.status === "Authorized Access"
                                        ? styles.authorized
                                        : styles.denied
                                }
                            >
                                {selectedLog.status}
                            </span>
                        </div>
                    </div>
                )}

                {/* Latest Access Logs */}
                <div className={styles.logsSection}>
                    <h3>Latest Access Logs</h3>
                    <div className={styles.logsContainer}>
                        {logs
                            .filter((log) => log !== selectedLog) // Exclude the selected log
                            .map((log, index) => (
                                <div
                                    key={index}
                                    className={styles.logEntry}
                                    onClick={() => setSelectedLog(log)} // Set the clicked log as the selected log
                                >
                                    <div>
                                        <strong>{log.username}</strong>
                                        <span>{log.code}</span>
                                    </div>
                                    <div>
                                        <span>{log.time}</span>
                                        <span>{log.date}</span>
                                    </div>
                                    <div
                                        className={
                                            log.status === "Authorized Access"
                                                ? styles.authorized
                                                : styles.denied
                                        }
                                    >
                                        {log.status}
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
