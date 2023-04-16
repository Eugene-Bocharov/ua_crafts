import React from 'react';
import styles from './DeliveryAdress.module.css';

import { InputLabel } from '../Inputlabel/Inputlabel';

export const DeliveryAdress: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Delivery address</h2>
      <form action="">
        <InputLabel name="First name" value="Bob" big />
        <InputLabel name="Last name" value="Hill" big />
        <InputLabel name="E-mail" value="example@gmail.com" type="email" big />
        <InputLabel
          name="Address"
          value="Ukraine, Kyiv, Soborna street 100"
          big
        />
      </form>
    </div>
  );
};
