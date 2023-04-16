import React from 'react';
import styles from './Filters.module.css';

import filter from './Filter.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { common } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

interface filterProps {
  children: string;
}

const FilterItem: React.FC<filterProps> = ({ children }) => {
  return (
    <React.Fragment>
      <li className={styles['filter-li']}>
        {children}
        <Checkbox
          sx={{
            color: common['black'],
            '& .MuiSvgIcon-root': { fontSize: 23, color: common['black'] },
          }}
        />
      </li>
    </React.Fragment>
  );
};

export const Filters: React.FC = () => {
  return (
    <React.Fragment>
      <div className={styles.main}>
        <div className={styles.flex}>
          <h1 className={styles.heading}>Filters</h1>
          <img src={filter} alt="filter.ico" />
        </div>
        <h2 className={styles.section}>Product type</h2>
        <ul className={styles.ul}>
          <FilterItem>Knitted products</FilterItem>
          <FilterItem>Embroidered Shirt</FilterItem>
          <FilterItem>Keychains</FilterItem>
          <FilterItem>Bracelets</FilterItem>
          <FilterItem>Necklaces</FilterItem>
        </ul>
        <button className={`${styles.flex} ${styles.invise} ${styles.more}`}>
          <p className={styles.more}>View more filters</p>
          <KeyboardArrowDownIcon className={styles.arrow} />
        </button>
      </div>
    </React.Fragment>
  );
};
