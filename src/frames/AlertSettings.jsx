import React, { useState } from 'react';
import styles from './AlertSettings.module.css'; // Crea este archivo para los estilos
import WebHeader from '../components/WebHeader';
import NavBar from '../components/NavBar';
import Background from '../components/Background';

function AlertSettings() {
    const [settings, setSettings] = useState({
        emailAlerts: true,
        smsAlerts: false,
        pushNotifications: true,
    });

    const handleToggle = (key) => {
        setSettings((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div className={styles.frameContainer}>
            <NavBar />
            <div className={styles.container}>
                <Background />
                <WebHeader subtitle="Manage Alert Settings" />
                <div className={styles.settingsWrapper}>
                    <h2 className={styles.title}>Alert Preferences</h2>
                    <div className={styles.setting}>
                        <label>Email Alerts</label>
                        <input
                            type="checkbox"
                            checked={settings.emailAlerts}
                            onChange={() => handleToggle('emailAlerts')}
                        />
                    </div>
                    <div className={styles.setting}>
                        <label>SMS Alerts</label>
                        <input
                            type="checkbox"
                            checked={settings.smsAlerts}
                            onChange={() => handleToggle('smsAlerts')}
                        />
                    </div>
                    <div className={styles.setting}>
                        <label>Push Notifications</label>
                        <input
                            type="checkbox"
                            checked={settings.pushNotifications}
                            onChange={() => handleToggle('pushNotifications')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlertSettings;