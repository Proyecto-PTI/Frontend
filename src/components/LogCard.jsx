import React from 'react';
import styles from './LogCard.module.css';

function LogCard({ log }) {
    return (
        <div className={styles.logCard}>
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
