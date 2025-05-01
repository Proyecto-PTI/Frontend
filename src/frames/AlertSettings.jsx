import React, { useState } from 'react';
import styles from './AlertSettings.module.css';
import userProfileStyles from '../frames/UserProfile.module.css'; // Importamos estilos de UserProfile
import WebHeader from '../components/WebHeader';
import NavBar from '../components/NavBar';
import Background from '../components/Background';

function AlertSettings() {
    const [settings, setSettings] = useState({
        dashboardAlerts: true,
        muteDashboardAlerts: false,
        emailAlerts: true,
        muteEmailAlerts: false,
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
                <WebHeader subtitle="Alert  Settings" />
                <div className={styles.settingsWrapper}>
                    <div className={styles.setting}>
                        <label>Alert When</label>
                        <select className={`${styles.dropdown} ${userProfileStyles.logDetails}`}>
                            <option>Always When Access is Denied</option>
                            <option>Only During Business Hours</option>
                            <option>Never</option>
                        </select>
                    </div>
                    <div className={styles.setting}>
                        <label>Dashboard Alerts</label>
                        <button
                            className={`${styles.toggleButton} ${
                                settings.dashboardAlerts ? styles.enabled : styles.disabled
                            }`}
                            onClick={() => handleToggle('dashboardAlerts')}
                        >
                            {settings.dashboardAlerts ? 'Enable' : 'Disable'}
                        </button>
                    </div>
                    <div className={styles.setting}>
                        <label>Mute Dashboard Alerts</label>
                        <button
                            className={`${styles.toggleButton} ${
                                settings.muteDashboardAlerts ? styles.disable : styles.enabled
                            }`}
                            onClick={() => handleToggle('muteDashboardAlerts')}
                        >
                            {settings.muteDashboardAlerts ? 'Muted' : 'Unmuted'}
                        </button>
                    </div>
                    <div className={styles.setting}>
                        <label>Email Alerts</label>
                        <button
                            className={`${styles.toggleButton} ${
                                settings.emailAlerts ? styles.enabled : styles.disabled
                            }`}
                            onClick={() => handleToggle('emailAlerts')}
                        >
                            {settings.emailAlerts ? 'Enable' : 'Disable'}
                        </button>
                    </div>
                    <div className={styles.setting2}>
                        <label>Mute Email Alerts</label>
                        <button
                            className={`${styles.toggleButton} ${
                                settings.muteEmailAlerts ? styles.disabled : styles.enabled
                            }`}
                            onClick={() => handleToggle('muteEmailAlerts')}
                        >
                            {settings.muteEmailAlerts ? 'Muted' : 'Unmuted'}
                        </button>
                    </div>
                </div>
                <button className={styles.applyButton}>
                    Apply
                </button>
            </div>
        </div>
    );
}

export default AlertSettings;