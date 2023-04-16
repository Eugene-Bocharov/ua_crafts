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
import shopper from './ShopPack.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';

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
              <Link to="/#catalog">
                <IconButton>
                  <button className={styles['invisible-btn']}>
                    <p className={styles.text + ' ' + styles['right-space']}>
                      Catalog
                    </p>
                    <img src={shopper} />
                  </button>
                </IconButton>
              </Link>
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
                  <Link to="/login">
                    <Button variant="text">
                      <span
                        className={`${styles.login} ${styles['right-space']}`}
                      >
                        Log In
                      </span>
                      <ExitToAppIcon className={styles.icon} />
                    </Button>
                  </Link>
                </React.Fragment>
              )}
            </div>
          </div>
        </ContainerBox>
      </div>
    </React.Fragment>
  );
};
