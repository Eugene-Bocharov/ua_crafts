import React from 'react';
import styles from './SmallBasketList.module.css';
import { SmallBasketListItem } from '../SmallBasketListItem/SmallBasketListItem';

const createData = (name: string, amount: number, price: number) => {
  return {
    name,
    amount,
    price,
  };
};

export const SmallBasketList: React.FC = () => {
  const items = [
    createData('Flag-shaped keychain', 2, 60),
    createData('Flag-shaped keychain', 2, 60),
    createData('Flag-shaped keychain', 2, 60),
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Basket (1)</h2>
      <ul className={styles.ul}>
        {items.map((item, id) => {
          return <SmallBasketListItem {...item} key={id} />;
        })}
      </ul>
      <h2 className={styles.total}>
        Total: {items.reduce((partSumm, a) => partSumm + a.price * a.amount, 0)}{' '}
        UAN
      </h2>
    </div>
  );
};
