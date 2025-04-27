import React, { useEffect, useState } from 'react';
import styles from './AccessLogs.module.css';

import WebHeader from "../components/WebHeader"; 
import Background from "../components/Background";
import NavBar from "../components/NavBar";

function AccessLogs() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        // Simulación de fetch, reemplazar por llamada real al backend
        fetch('http://localhost:5000/api/access-logs')
            .then(response => response.json())
            .then(data => setLogs(data))
            .catch(error => console.error('Error fetching logs:', error));
    }, []);

    // Agrupar accesos por fecha
    const groupedLogs = logs.reduce((acc, log) => {
        const date = log.date.split(' ')[0]; // Asumimos que date incluye fecha y hora
        if (!acc[date]) acc[date] = [];
        acc[date].push(log);
        return acc;
    }, {});

    const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"

    return (
        <div className={styles.frameContainer}>
            <NavBar />
            <div className={styles.container}>
                <Background />
                <WebHeader subtitle="View System Access Logs" />
                <div className={styles.logsWrapper}>
                    {Object.keys(groupedLogs)
                        .sort((a, b) => b.localeCompare(a))
                        .map(date => (
                            <div key={date} className={styles.dateSection}>
                                <div className={styles.dateHeader}>
                                    {/* Mostrar "Today's Accesses" solo si la fecha es hoy */}
                                    {date === today && (
                                        <h3 className={styles.dateTitleToday}>
                                            Today's Accesses
                                        </h3>
                                    )}
                                    <h3 className={styles.dateTitle}>
                                        {date}
                                    </h3>
                                </div>

                                <div className={styles.logList}>
                                    {groupedLogs[date].map((log, index) => (
                                        <div key={index} className={styles.logCard}>
                                            <div className={styles.userInfo}>
                                                <span className={styles.username}>{log.username}</span>
                                                <span className={styles.code}>{log.code}</span>
                                            </div>
                                            <div className={styles.accessInfo}>
                                                <div className={styles.dateTime}>
                                                    <span className={styles.time}>{log.time}</span>
                                                    <span className={styles.date}>{log.date.split(' ')[0]}</span>
                                                </div>
                                                <span className={`${styles.status} ${log.status === 'Authorized Access' ? styles.authorized : styles.denied}`}>
                                                    {log.status}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default AccessLogs;

