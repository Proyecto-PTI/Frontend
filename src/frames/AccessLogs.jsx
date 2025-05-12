import React, { useEffect, useState } from 'react';
import styles from './AccessLogs.module.css';

import WebHeader from "../components/WebHeader"; 
import Background from "../components/Background";
import NavBar from "../components/NavBar";
import LogCard from "../components/LogCard.jsx";  

function AccessLogs() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        // Simulación de fetch, reemplazar por llamada real al backend
        fetch('http://nattech.fib.upc.edu:40407/logs')
            .then(response => response.json())
            .then(data => setLogs(data))
            .catch(error => console.error('Error fetching logs:', error));
    }, []);

    // Agrupar accesos por fecha
   const groupedLogs = logs.reduce((acc, log) => {
        const date = log.dia;
        if (!acc[date]) acc[date] = [];
        acc[date].push(log);
        return acc;
    }, {});

    Object.keys(groupedLogs).forEach(date => {
        groupedLogs[date].sort((a, b) => {
            const dateTimeA = new Date(`${a.dia}T${a.hora}`);
            const dateTimeB = new Date(`${b.dia}T${b.hora}`);
            return dateTimeB - dateTimeA; // Descendente
        });
    });

    const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"

    console.log("Logs agrupados:", groupedLogs);
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

export default AccessLogs;
