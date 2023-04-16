import React from 'react';
import styles from './BasketTableItem.module.css';

import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { BasketItemProps } from '../../declarations/Interfaces/ComponentProps';

export const BasketTableItem: React.FC<BasketItemProps> = ({
  name,
  amount,
  price,
  nameStyle,
  amountStyle,
  sumStyle,
  deleteStyle,
  id,
  onDelete,
}) => {
  return (
    <React.Fragment>
      <li className={styles.container}>
        <span className={`${styles.item} ${nameStyle}`}>{name}</span>
        <span className={`${styles.item} ${amountStyle}`}>
          <input className={styles.input} defaultValue={amount} type="text" />
        </span>
        <span className={`${styles.item} ${sumStyle}`}>
          {amount * price} UAN
        </span>
        <span className={`${styles.item} ${deleteStyle}`}>
          <IconButton onClick={() => onDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </span>
      </li>
    </React.Fragment>
  );
};
