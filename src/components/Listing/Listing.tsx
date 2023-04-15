import React from 'react';
import styles from './Listing.module.css';

import { ContainerBox } from '../ContainerBox/ContainerBox';
import { Catalog } from '../Catalog/Catalog';
import { Filters } from '../Filters/Filters';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export const Listing: React.FC = () => {
  return (
    <React.Fragment>
      <ContainerBox>
        <div className={styles['flex-div']}>
          <Filters />
          <Catalog />
        </div>
        <div className={styles['pagination-container']}>
          <div className={styles.pagination}>
            <Pagination
              count={8}
              showFirstButton
              showLastButton
              size="large"
              renderItem={(item) => {
                return (
                  <PaginationItem
                    slots={{
                      previous: ArrowBackIosNewIcon,
                      next: ArrowForwardIosNewIcon,
                      last: KeyboardDoubleArrowRightIcon,
                      first: KeyboardDoubleArrowLeftIcon,
                    }}
                    {...item}
                  />
                );
              }}
            />
          </div>
        </div>
      </ContainerBox>
    </React.Fragment>
  );
};
