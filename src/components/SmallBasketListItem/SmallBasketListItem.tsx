import React from 'react';
import styles from './SmallBasketListItem.module.css';
import { SmallBasketListItemProps } from '../../declarations/Interfaces/ComponentProps';

export const SmallBasketListItem: React.FC<SmallBasketListItemProps> = ({
  name,
  amount,
  price,
}) => {
  return (
    <li className={styles['li-container']}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <span className={styles.item}>{name}</span>
          <span className={styles['item-name']}>Product name</span>
        </li>
        <li className={styles.li}>
          <span className={styles.item}>{amount}</span>
          <span className={styles['item-name']}>Amount UAN</span>
        </li>
        <li className={styles.li}>
          <span className={styles.item}>{amount * price} UAN</span>
          <span className={styles['item-name']}>Sum</span>
        </li>
      </ul>
    </li>
  );
};
