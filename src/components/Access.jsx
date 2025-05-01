import React, { useEffect, useState } from 'react';
import styles from './Access.module.css';

import WebHeader from "../components/WebHeader"; 
import Background from "../components/Background";
import NavBar from "../components/NavBar";
import LogCard from "../components/LogCard.jsx";  

function Access({
  statusFilter = "",
  usernameFilter = "",
  codeFilter = "",
  dateFilter = "",
  groupByDate = true,
  limit = 0 // 0 = sin límite
}) {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/access-logs')
      .then(response => response.json())
      .then(data => setLogs(data))
      .catch(error => console.error('Error fetching logs:', error));
  }, []);

  // Aplicar filtros
  let filteredLogs = logs.filter(log => {
    return (
      (statusFilter === "" || log.status === statusFilter) &&
      (usernameFilter === "" || log.username.includes(usernameFilter)) &&
      (codeFilter === "" || log.code.includes(codeFilter)) &&
      (dateFilter === "" || log.date.startsWith(dateFilter)) // formato 'YYYY-MM-DD'
    );
  });

  // Ordenar por fecha descendente (más reciente primero)
  filteredLogs.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Aplicar límite si existe
  if (limit > 0) {
    filteredLogs = filteredLogs.slice(0, limit);
  }

  // Agrupar por fecha si está activado
  const groupedLogs = groupByDate
    ? filteredLogs.reduce((acc, log) => {
        const logDate = log.date.split('T')[0];
        if (!acc[logDate]) acc[logDate] = [];
        acc[logDate].push(log);
        return acc;
      }, {})
    : null;

  return (
    <div className={styles.frameContainer}>

      <div className={styles.logsWrapper}>
        {groupByDate ? (
          Object.keys(groupedLogs)
            .sort((a, b) => b.localeCompare(a))
            .map(date => (
              <div key={date} className={styles.dateSection}>
                <div className={styles.dateHeader}>
                  <h3 className={styles.dateTitle}>{date}</h3>
                </div>
                <div className={styles.logList}>
                  {groupedLogs[date].map((log, index) => (
                    <LogCard key={index} log={log} />
                  ))}
                </div>
              </div>
            ))
        ) : (
          <div className={styles.logList}>
            {filteredLogs.map((log, index) => (
              <LogCard key={index} log={log} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Access;
