import React from 'react';
import styles from './Background.module.css'; 


const Background = () => {
  return (
    <div className={styles.background}>
      <div className={`${styles.elipse} ${styles.elipse1}`} />
      <div className={`${styles.elipse} ${styles.elipse2}`} />
      <div className={`${styles.elipse} ${styles.elipse3}`} />
      <div className={`${styles.elipse} ${styles.elipse4}`} />
      <div className={`${styles.elipse} ${styles.elipse5}`} />
    </div>
  );
}

export default Background;
