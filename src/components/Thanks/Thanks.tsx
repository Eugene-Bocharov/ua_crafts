import React from 'react';
import styles from './Thanks.module.css';

import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export const Thanks: React.FC<SimpleDialogProps> = ({
  onClose,
  selectedValue,
  open,
}) => {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <div className={styles.main}>
        <h1 className={styles.heading}>
          Thank you for ordering from
          <br />
          UA crafts!
        </h1>
        <hr className={styles.line} />
        <h2 className={styles.subheading}>
          Your order has been successfully
          <br />
          confirmed.
        </h2>
        <div className={styles.flex}>
          <Link to="/orders">
            <button className={styles.btn}>My orders</button>
          </Link>
          <Link to="/">
            <button className={styles.btn}>Main page</button>
          </Link>
        </div>
      </div>
    </Dialog>
  );
};
