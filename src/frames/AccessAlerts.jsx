import React, { useEffect, useState } from 'react';
import styles from './AccessLogs.module.css';

import WebHeader from "../components/WebHeader"; 
import Background from "../components/Background";
import NavBar from "../components/NavBar";
import LogCard from "../components/LogCard.jsx";  

function AccessAlerts() {
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
                <WebHeader subtitle="View System Access Alerts" />
                <div className={styles.logsWrapper}>
                    {Object.keys(groupedLogs)
                        .sort((a, b) => b.localeCompare(a))
                        .map(date => (
                            <div key={date} className={styles.dateSection}>
                                <div className={styles.dateHeader}>
                                    {date === today && (
                                        <h3 className={styles.dateTitleToday}>
                                            Today's Alerts
                                        </h3>
                                    )}
                                    <h3 className={styles.dateTitle}>
                                        {date}
                                    </h3>
                                </div>

                                <div className={styles.logList}>
                                    {/* Filtrar logs para solo mostrar los Denied */}
                                    {groupedLogs[date]
                                        .filter(log => log.status === 'Access Denied')
                                        .map((log, index) => (
                                            <LogCard key={index} log={log} />
                                        ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default AccessAlerts;
