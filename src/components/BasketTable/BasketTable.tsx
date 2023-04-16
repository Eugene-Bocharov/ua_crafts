import React, { useState } from 'react';
import styles from './BasketTable.module.css';

import { BasketTableItem } from '../BasketTableItem/BasketTableItem';
import { onAmount, onDelete } from '../../declarations/types/ComponentsProps';
import { basketState } from '../../declarations/Interfaces/ComponentProps';

const createData = (name: string, amount: number, price: number) => {
  return {
    name,
    amount,
    price,
  };
};

export const BasketTable: React.FC = () => {
  const [state, setState] = useState([
    createData('Flag-shaped keychain1', 2, 60),
    createData('Flag-shaped keychain2', 2, 60),
    createData('Flag-shaped keychain3', 2, 60),
    createData('Flag-shaped keychain4', 2, 60),
  ]);

  const ondelete: onDelete = (id) => {
    const newState: Array<basketState> = [
      ...state.slice(0, id),
      ...state.slice(id + 1, state.length),
    ];
    setState(newState);
  };

  const onamount: onAmount = (id, val) => {
    const changed = state[id];
    changed.amount = val;
    const newState: Array<basketState> = [
      ...state.slice(0, id),
      changed,
      ...state.slice(id + 1, state.length),
    ];
    setState(newState);
  };
  return (
    <React.Fragment>
      <div>
        <h1 className={styles.heading}>Basket</h1>
        <ul>
          <li className={styles['table-head']}>
            <span className={`${styles['table-heading']} ${styles.name}`}>
              Item name
            </span>
            <span className={`${styles['table-heading']} ${styles.amount}`}>
              Amount
            </span>
            <span className={`${styles['table-heading']} ${styles.sum}`}>
              Sum
            </span>
            <span
              className={`${styles['table-heading']} ${styles.delete}`}
            ></span>
          </li>
          {state.map(({ name, amount, price }, i) => {
            return (
              <BasketTableItem
                key={i}
                name={name}
                amount={amount}
                price={price}
                nameStyle={styles.name}
                amountStyle={styles.amount}
                sumStyle={styles.sum}
                deleteStyle={styles.delete}
                id={i}
                onDelete={ondelete}
                onAmount={onamount}
              />
            );
          })}
        </ul>
        <hr className={styles.line} />
        <div className={styles.flex}>
          <span className={styles.front}></span>
          <span className={styles.total}>
            Total{' '}
            {state.reduce((partSumm, a) => partSumm + a.price * a.amount, 0)}{' '}
            UAN
          </span>
          <span className={styles.back}></span>
        </div>
      </div>
    </React.Fragment>
  );
};
