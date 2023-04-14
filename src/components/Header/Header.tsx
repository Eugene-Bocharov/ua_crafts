import React from 'react';
import styles from './Header.module.css';

import { ContainerBox } from '../ContainerBox/ContainerBox';
import logo from './Logo.svg';
import basket from './Basket.svg';
import user from './User.svg';
import triangle from './Triangle.svg';
import shopPack from './ShopPack.svg';

export const Header: React.FC = () => {
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
              <img src={basket} alt="basket" />
              <button className={styles['invisible-btn']}>
                <img className={styles['right-space']} src={user} alt="user" />
                <img src={triangle} alt="triangle" />
              </button>
            </div>
          </div>
        </ContainerBox>
      </div>
    </React.Fragment>
  );
};
