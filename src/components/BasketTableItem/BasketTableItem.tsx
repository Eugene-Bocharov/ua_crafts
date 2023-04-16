import React, { useState } from 'react';
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
  onAmount,
}) => {
  const [state, setState] = useState(amount);

  const onChange = (evt: any) => {
    let val = Number(evt.target.value || 0);
    if (val > 999) val = 999;
    if (val < 0) val = 0;
    setState(val);
    console.log(state);
    onAmount(id, val);
  };
  return (
    <React.Fragment>
      <li className={styles.container}>
        <span className={`${styles.item} ${nameStyle}`}>{name}</span>
        <span className={`${styles.item} ${amountStyle}`}>
          <input
            onChange={onChange}
            className={styles.input}
            value={state}
            type="number"
            max={999}
            min={0}
          />
        </span>
        <span className={`${styles.item} ${sumStyle}`}>
          {state * price} UAN
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
