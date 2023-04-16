import React from 'react';
import styles from './ProfileForm.module.css';

import { InputLabel } from '../Inputlabel/Inputlabel';
import profile from './profileLogo.png';

export const ProfileForm: React.FC = () => {
  return (
    <React.Fragment>
      <div>
        <h1 className={styles.heading}>Profile</h1>
        <form action="">
          <div className={styles.flex}>
            <div>
              <InputLabel name="First name" value="Taras" />
              <InputLabel name="Last name" />
            </div>
            <div className={styles['profile-container']}>
              <img className={styles['profile-logo']} src={profile} alt="" />
            </div>
          </div>
          <div className={`${styles.flex} ${styles['space-between']}`}>
            <InputLabel small name="Username" value="Tarasssp" />
            <InputLabel small name="E-mail" type="email" />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
