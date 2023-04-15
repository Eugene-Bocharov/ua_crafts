import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import { ContainerBox } from '../ContainerBox/ContainerBox';
import logo from './Logo.svg';
import basket from './Basket.svg';
import user from './User.svg';
import triangle from './Triangle.svg';
import shopPack from './ShopPack.svg';
import { HeaderProps } from '../../declarations/Interfaces/ComponentProps';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { IconButton } from '@mui/material';

export const Header: React.FC<HeaderProps> = ({ loggedIn }) => {
  return (
    <React.Fragment>
      <div className={styles.header}>
        <ContainerBox>
          <div className={styles['flex-div']}>
            <div style={{ width: '30%' }} className={styles['flex-div']}>
              <img src={logo} alt="logo" />
              <button className={styles['invisible-btn']}>
                <p className={styles.text + ' ' + styles['right-space']}>
                  Catalog
                </p>
                <img src={shopPack} alt="shopPack" />
              </button>
            </div>
            <div style={{ width: '10%' }} className={styles['flex-div']}>
              {loggedIn ? (
                <React.Fragment>
                  <Link to="/orders">
                    <IconButton>
                      <img src={basket} alt="basket" />
                    </IconButton>
                  </Link>
                  <button className={styles['invisible-btn']}>
                    <img
                      className={styles['right-space']}
                      src={user}
                      alt="user"
                    />
                    <img src={triangle} alt="triangle" />
                  </button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <button className={styles['invisible-btn']}>
                    <span
                      className={`${styles.login} ${styles['right-space']}`}
                    >
                      Log In
                    </span>
                  </button>
                  <ExitToAppIcon className={styles.icon} />
                </React.Fragment>
              )}
            </div>
          </div>
        </ContainerBox>
      </div>
    </React.Fragment>
  );
};
