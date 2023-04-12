import React from 'react';
import styles from './Filters.module.css';

import filter from './Filter.svg';

interface filterProps {
  children: string;
}

const FilterItem: React.FC<filterProps> = ({ children }) => {
  return (
    <React.Fragment>
      <li>{children}</li>
      <input type={'checkbox'} />
    </React.Fragment>
  );
};

export const Filters: React.FC = () => {
  return (
    <React.Fragment>
      <div className={styles.main}>
        <h1>
          Filters
          <img src={filter} alt="filter.ico" />
        </h1>
        <h2>Product type</h2>
        <ul>
          <FilterItem> Embroidered </FilterItem>
          <li>Embroidered Shirt</li>
          <li>Keychains</li>
          <li>Bracelets</li>
          <li>Necklaces</li>
        </ul>
      </div>
    </React.Fragment>
  );
};
