import React from 'react';
import styles from './ProfileForm.module.css';

import { InputProps } from '../../declarations/Interfaces/ComponentProps';
import profile from './profileLogo.png';

const InputLabel: React.FC<InputProps> = ({ name, value, type, small }) => {
  return (
    <React.Fragment>
      <div>
        <p className={styles['input-label']}>{name}</p>
        <input
          className={`${styles.input} ${small ? styles['small-input'] : ''}`}
          placeholder={name}
          defaultValue={value}
          type={type || 'text'}
        />
      </div>
    </React.Fragment>
  );
};

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
