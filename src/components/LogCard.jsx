import React from 'react';
import styles from './LogCard.module.css';

function LogCard({ log }) {
    const username = log.id_persona;
    const code = log.id_porta;
    const date = log.dia;
    const time = log.hora;
    const status = log.successful ? 'Authorized Access' : 'Access Denied';

    return (
        <div className={styles.logCard}>
            {status === 'Access Denied' && (
                <div className={styles.iconWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                    </svg>
                </div>
            )}
            <div className={styles.userInfo}>
                <span className={styles.username}>{username}</span>
                <span className={styles.code}>{code}</span>
            </div>
            <div className={styles.accessInfo}>
                <div className={styles.dateTime}>
                    <span className={styles.time}>{time}</span>
                    <span className={styles.date}>{date}</span>
                </div>
                <span className={`${styles.status} ${status === 'Authorized Access' ? styles.authorized : styles.denied}`}>
                    {status}
                </span>
            </div>
        </div>
    );
}

export default LogCard;
