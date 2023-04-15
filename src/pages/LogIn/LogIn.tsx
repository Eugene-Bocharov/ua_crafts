import React, { useEffect } from 'react';
import styles from './LogIn.module.css';

import WestIcon from '@mui/icons-material/West';
import IconButton from '@mui/material/IconButton';

import github from './github.svg';
import google from './google.svg';
import facebook from './facebook.svg';

export const LogIn: React.FC = () => {
  useEffect(() => {
    document.body.style.background = '#F5F5F5';
    return () => {
      document.body.style.background = '#FFFFFF';
    };
  });
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles['back-div']}>
            <IconButton className={styles.back} aria-label="back">
              <WestIcon />
            </IconButton>
          </div>
          <h1 className={styles.heading}>Log In</h1>
          <form action="">
            <p className={styles.text}>Username</p>
            <input
              className={styles.input}
              type="text"
              placeholder="Username"
            />
            <p className={styles.text}>Password</p>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
            />

            <br />
            <button className={styles.btn} type="submit">
              Log in
            </button>
          </form>
          <hr className={styles.line} />
          <div>
            <img className={styles.icon} src={google} alt="" />
            <img className={styles.icon} src={github} alt="" />
            <img className={styles.icon} src={facebook} alt="" />
          </div>
          <a className={styles.link}>Forgot your password?</a>
          <p className={styles.pt}>
            Not a member? <a className={styles.link}>Create an account</a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
