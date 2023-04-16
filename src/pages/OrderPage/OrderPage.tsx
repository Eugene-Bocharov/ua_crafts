import React from 'react';
import styles from './OrderPage.module.css';

import { Header } from '../../components/Header/Header';
import { ContainerBox } from '../../components/ContainerBox/ContainerBox';
import { OrderTable } from '../../components/OrderTable/OrderTable';

import { BackLink } from '../../components/BackLink/BackLink';

export const OrderPage: React.FC = () => {
  return (
    <React.Fragment>
      <Header loggedIn />
      <ContainerBox>
        <div className={styles.main}>
          <BackLink to="/orders" />
          <h1 className={styles.heading}>Your orders</h1>
          <div className={styles['grid-container']}>
            <OrderTable />
          </div>
        </div>
      </ContainerBox>
    </React.Fragment>
  );
};
