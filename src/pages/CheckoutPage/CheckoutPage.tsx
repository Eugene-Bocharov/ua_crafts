import React from 'react';
import styles from './CheckoutPage.module.css';
import { Header } from '../../components/Header/Header';
import { ContainerBox } from '../../components/ContainerBox/ContainerBox';
import { BackLink } from '../../components/BackLink/BackLink';
import { DeliveryAdress } from '../../components/DeliveryAdress/DeliveryAdress';
import { SmallBasketList } from '../../components/SmallBasketList/SmallBasketList';
import { Thanks } from '../../components/Thanks/Thanks';

export const CheckoutPage: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const [selectedValue, setSelectedValue] = React.useState('sss');

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };
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
            <div className={styles['center-container']}>
              <button onClick={handleClickOpen} className={styles.btn}>
                Continue
              </button>
            </div>
            <Thanks
              selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
            />
          </div>
        </div>
      </ContainerBox>
    </React.Fragment>
  );
};
