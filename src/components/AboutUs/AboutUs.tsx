import React from 'react';
import styles from './AboutUs.module.css';

import logo from './Logo.svg';

export const AboutUs: React.FC = () => {
  return (
    <React.Fragment>
      <div>
        <img className={styles.img} src={logo} alt="" />
        <p className={`${styles.text} ${styles.bold}`}>
          Shop of Ukrainian handicrafts.
        </p>
        <p className={styles.text}>Quality.</p>
        <p className={styles.text}>Creative.</p>
        <p className={styles.text}>Ideal for home decor.</p>
        <button className={styles.btn}>Start shopping</button>
      </div>
    </React.Fragment>
  );
};
