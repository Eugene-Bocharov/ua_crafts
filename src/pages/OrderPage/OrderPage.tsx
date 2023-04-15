import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OrderPage.module.css';

import { Header } from '../../components/Header/Header';
import { ContainerBox } from '../../components/ContainerBox/ContainerBox';
import { OrderTable } from '../../components/OrderTable/OrderTable';

import WestIcon from '@mui/icons-material/West';
import IconButton from '@mui/material/IconButton';

export const OrderPage: React.FC = () => {
  return (
    <React.Fragment>
      <Header loggedIn />
      <ContainerBox>
        <div className={styles.main}>
          <div className={styles['back-div']}>
            <Link to="/orders">
              <IconButton className={styles.back} aria-label="back">
                <WestIcon />
              </IconButton>
            </Link>
          </div>
          <h1 className={styles.heading}>Your orders</h1>
          <div className={styles['grid-container']}>
            <OrderTable />
          </div>
        </div>
      </ContainerBox>
    </React.Fragment>
  );
};
