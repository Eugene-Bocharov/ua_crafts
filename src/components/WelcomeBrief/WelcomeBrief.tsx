import React from 'react';
import styles from './WelcomeBrief.module.scss';

export const WelcomeBrief: React.FC = () => {
  return (
    <React.Fragment>
      <div className={styles.WelcomeBriefBox}>
        <div className={styles.WelcomeBriefBoxContainer}>
          <p className={styles.briefP}>Shop of Ukrainian handicrafts</p>
          <p className={styles.briefP}>Quality</p>
          <p className={styles.briefP}>Creative</p>
          <p className={styles.briefP}>Ideal for home decor</p>
          <button className={styles.BriefButton}>Start Shopping</button>
        </div>
      </div>
    </React.Fragment>
  );
};
