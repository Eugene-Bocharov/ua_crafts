import React from 'react';
import styles from './Filters.module.css';
import checkboxStyle from './Checkbox.module.css';

import filter from './Filter.svg';
import arrow from './Arrow.svg';

interface filterProps {
  children: string;
}

const FilterItem: React.FC<filterProps> = ({ children }) => {
  return (
    <React.Fragment>
      <li className={styles['filter-li']}>
        {children}
        <input
          className={checkboxStyle['control-indicator']}
          type={'checkbox'}
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
          <p>View more filters</p>
          <img className={styles.arrow} src={arrow} alt="" />
        </button>
      </div>
    </React.Fragment>
  );
};
