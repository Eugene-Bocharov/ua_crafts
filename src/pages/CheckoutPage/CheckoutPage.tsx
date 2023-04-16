import React from 'react';
import styles from './CheckoutPage.module.css';
import { Header } from '../../components/Header/Header';
import { ContainerBox } from '../../components/ContainerBox/ContainerBox';
import { BackLink } from '../../components/BackLink/BackLink';
import { DeliveryAdress } from '../../components/DeliveryAdress/DeliveryAdress';
import { SmallBasketList } from '../../components/SmallBasketList/SmallBasketList';

export const CheckoutPage: React.FC = () => {
  return (
    <React.Fragment>
      <Header loggedIn />
      <ContainerBox>
        <div className={styles.main}>
          <BackLink to="/profile" />
          <div className={styles['main-container']}>
            <h1 className={styles.heading}>Checkout</h1>
            <div className={`${styles.flex} ${styles.center}`}>
              <DeliveryAdress />
              <SmallBasketList />
            </div>
          </div>
        </div>
      </ContainerBox>
    </React.Fragment>
  );
};
