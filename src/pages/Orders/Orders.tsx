import React from 'react';
import styles from './Orders.module.css';

import { Header } from '../../components/Header/Header';
import { ContainerBox } from '../../components/ContainerBox/ContainerBox';
import { OrdersTable } from '../../components/OrdersTable/OrdersTable';

import { BackLink } from '../../components/BackLink/BackLink';

export const Orders: React.FC = () => {
  return (
    <React.Fragment>
      <Header loggedIn />
      <ContainerBox>
        <div className={styles.main}>
          <BackLink />
          <h1 className={styles.heading}>Your orders</h1>
          <div className={styles['grid-container']}>
            <OrdersTable />
          </div>
        </div>
      </ContainerBox>
    </React.Fragment>
  );
};
