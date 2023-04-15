import React from 'react';
import styles from './LogIn.module.css';
import './body.css';

export const LogIn: React.FC = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.main}>
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
              type="text"
              placeholder="Password"
            />
            <button type="submit">Log in</button>
          </form>
          <hr />
          <div></div>
          <a>Forgot your password?</a>
          <p>
            Not a member?
            <a>Create an account</a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
