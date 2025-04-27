import React from 'react';
import styles from './LogCard.module.css';

function LogCard({ log }) {
    return (
        <div className={styles.logCard}>
            {/* Mostrar icono solo cuando el estado es "Access Denied" */}
            {log.status === 'Access Denied' && (
                <div className={styles.iconWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                    </svg>
                </div>
            )}
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
    );
}

export default LogCard;
