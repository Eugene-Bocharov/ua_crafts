import React from 'react';
import styles from './Listing.module.css';

import { ContainerBox } from '../ContainerBox/ContainerBox';
import { Catalog } from '../Catalog/Catalog';
import { Filters } from '../Filters/Filters';
import Pagination from '@mui/material/Pagination';

export const Listing: React.FC = () => {
  return (
    <React.Fragment>
      <ContainerBox>
        <div className={styles['flex-div']}>
          <Filters />
          <Catalog />
        </div>
        <Pagination count={8} />
      </ContainerBox>
    </React.Fragment>
  );
};
