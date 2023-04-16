import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import { ContainerBox } from '../ContainerBox/ContainerBox';
import logo from './Logo.svg';
import basket from './Basket.svg';
import triangle from './Triangle.svg';
import { HeaderProps } from '../../declarations/Interfaces/ComponentProps';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { IconButton } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Header: React.FC<HeaderProps> = ({ loggedIn }) => {
  return (
    <React.Fragment>
      <div className={styles.header}>
        <ContainerBox>
          <div className={styles['flex-div']}>
            <div style={{ width: '30%' }} className={styles['flex-div']}>
              <Link to="/">
                <IconButton>
                  <img src={logo} alt="logo" />
                </IconButton>
              </Link>
              <button className={styles['invisible-btn']}>
                <p className={styles.text + ' ' + styles['right-space']}>
                  Catalog
                </p>
                <Link to="/#catalog">
                  <IconButton>
                    <ShoppingBasketIcon className={styles.icon} />
                  </IconButton>
                </Link>
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
                  <Link to="/profile">
                    <IconButton>
                      <AccountCircleIcon
                        className={`${styles['right-space']}
                        ${styles['bigger-icon']}`}
                      />
                      <img src={triangle} />
                    </IconButton>
                  </Link>
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
