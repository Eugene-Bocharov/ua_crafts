import React from 'react';
import styles from './Listing.module.css';

import { ContainerBox } from '../ContainerBox/ContainerBox';
import { Catalog } from '../Catalog/Catalog';
import { Filters } from '../Filters/Filters';

export const Listing: React.FC = () => {
  return (
    <React.Fragment>
      <ContainerBox>
        <div className={styles['flex-div']}>
          <Filters />
          <Catalog />
        </div>
      </ContainerBox>
    </React.Fragment>
  );
};
